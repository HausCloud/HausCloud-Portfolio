from functools import wraps
from os import environ as env
from werkzeug.exceptions import HTTPException
from dotenv import load_dotenv, find_dotenv
from authlib.integrations.flask_client import OAuth
from six.moves.urllib.parse import urlencode
from flask import Flask, render_template, redirect, Blueprint, jsonify, session, url_for, current_app
import uuid
import os
import json

# Register blueprint for web applications with prefix /app
webapps = Blueprint('webapps', __name__, url_prefix='/app')

oauth = OAuth(current_app)

auth0 = oauth.register(
    'auth0',
    client_id=os.getenv('oauth_client_id'),
    client_secret=os.getenv('oauth_client_secret'),
    api_base_url='https://hauscloud.auth0.com',
    access_token_url='https://hauscloud.auth0.com/oauth/token',
    authorize_url='https://hauscloud.auth0.com/authorize',
    client_kwargs={
        'scope': 'openid profile email',
    },
)

# Decorator to check user login and redirect to appropriate route
def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if 'profile' not in session:
            # Redirect to Login page here
            return redirect('/app/gratitude_journal')
        return f(*args, **kwargs)
    return decorated


@webapps.route('/hub')
def hub():
    return render_template('hub.html', cache_id=uuid.uuid4())


@webapps.route('/anime_quote_generator')
def anime_quote_generator():
    return render_template('aqg.html', cache_id=uuid.uuid4())


@webapps.route('/memory_game')
def memory_game():
    return render_template('mg.html', cache_id=uuid.uuid4())


@webapps.route('/gratitude_journal')
def gratitude_journal():
    return render_template('journal_login.html', cache_id=uuid.uuid4())


@webapps.route('/gratitude_journal/login')
def login():
    #return auth0.authorize_redirect(redirect_uri='http://www.hauscloud.me:80/app/gratitude_journal/callback')
    return auth0.authorize_redirect(redirect_uri='http://localhost:5000/app/gratitude_journal/callback')


@webapps.route('/gratitude_journal/logout')
def logout():
    # Clear session stored data
    session.clear()
    # Redirect user to logout endpoint
    params = {'returnTo': url_for('webapps.gratitude_journal', _external=True), 'client_id': os.getenv('oauth_client_id')}
    return redirect(auth0.api_base_url + '/v2/logout?' + urlencode(params))


@webapps.route('/gratitude_journal/callback')
def callback_handling():
    auth0.authorize_access_token()
    resp = auth0.get('userinfo')
    userinfo = resp.json()

    session['jwt_payload'] = userinfo
    session['profile'] = {
        'user_id': userinfo['sub'],
        'name': userinfo['name'],
        'picture': userinfo['picture']
    }
    return redirect('/app/gratitude_journal/personal')


@webapps.route('/gratitude_journal/personal')
@requires_auth
def gratitude_journal_dashboard():
    name = session['jwt_payload']['nickname']
    if name[-1:] == 's':
        name = name[:-1] + "'" + 's'
    else:
        name += "'s"

    return render_template('journal.html', user=name, cache_id=uuid.uuid4(), data=session['jwt_payload'])