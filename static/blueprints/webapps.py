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

webapps = Blueprint('webapps', __name__, url_prefix='/app')

oauth = OAuth(current_app)

auth0 = oauth.register(
    'auth0',
    client_id='e3obhOjj0e0aaw4DN5NEyvt4kppEWGD4',
    client_secret='fWZGrvwFr4ChgRDPPyCYNOOQpz4zblwB4-_41OXmCL7repOBX-mQcxN-xc98KftR',
    api_base_url='https://hauscloud.auth0.com',
    access_token_url='https://hauscloud.auth0.com/oauth/token',
    authorize_url='https://hauscloud.auth0.com/authorize',
    client_kwargs={
        'scope': 'openid profile email',
    },
)

def requires_auth(f):
  @wraps(f)
  def decorated(*args, **kwargs):
    if 'profile' not in session:
      # Redirect to Login page here
      return redirect('http://hauscloud.me/app/gratitude_journal')
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
    return render_template('home.html', cache_id=uuid.uuid4())

@webapps.route('/gratitude_journal/login')
def login():
    return auth0.authorize_redirect(redirect_uri='http://hauscloud.me/app/gratitude_journal/callback')

@webapps.route('/gratitude_journal/logout')
def logout():
    # Clear session stored data
    session.clear()
    # Redirect user to logout endpoint
    params = {'returnTo': url_for('webapps.gratitude_journal', _external=True), 'client_id': 'e3obhOjj0e0aaw4DN5NEyvt4kppEWGD4'}
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
    return redirect('http://hauscloud.me/app/gratitude_journal/dashboard')

@webapps.route('/gratitude_journal/dashboard')
@requires_auth
def gratitude_journal_dashboard():
    return render_template('dashboard.html', cache_id=uuid.uuid4(), userinfo=session['profile'], userinfo_pretty=json.dumps(session['jwt_payload'], indent=4))