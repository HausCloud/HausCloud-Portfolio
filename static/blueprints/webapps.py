'Blueprint for web applications and hub'

import uuid
import os
from flask_cors import CORS
from functools import wraps
from authlib.integrations.flask_client import OAuth
from six.moves.urllib.parse import urlencode
from flask import render_template, redirect, Blueprint, session, url_for, current_app

webapps = Blueprint('webapps', __name__, url_prefix='/app')

CORS(webapps)

# Setup login for Auth0
oauth = OAuth(current_app)
auth0 = oauth.register(
    'auth0',
    client_id=os.getenv('CLIENT_ID'),
    client_secret=os.getenv('CLIENT_SECRET'),
    api_base_url='https://hauscloud.auth0.com',
    access_token_url='https://hauscloud.auth0.com/oauth/token',
    authorize_url='https://hauscloud.auth0.com/authorize',
    client_kwargs={
        'scope': 'openid profile email',
    },
)


def requires_auth(f):
    'Wrapper function'
    @wraps(f)
    def decorated(*args, **kwargs):
        'Decorator for validating token and route access'
        if 'profile' not in session:
            # Redirect to Login page here
            return redirect('/app/gratitude_journal')
        return f(*args, **kwargs)
    return decorated


@webapps.route('/hub')
def hub():
    'Render web application hub'
    return render_template('hub.html', cache_id=uuid.uuid4())


@webapps.route('/anime_quote_generator')
def aqg():
    'Render React app: Anime Quote Generator'
    return render_template('aqg.html', cache_id=uuid.uuid4())


@webapps.route('/memory_game')
def mg():
    'Render React app: Memory Game'
    return render_template('mg.html', cache_id=uuid.uuid4())


@webapps.route('/gratitude_journal')
def gj_login():
    'Render login page for React app, Gratitude Journal'
    return render_template('journal_login.html', cache_id=uuid.uuid4())


@webapps.route('/gratitude_journal/login')
def auth_gj_login():
    'Redirect Auth0 login page and prep for callback on successful login'
    return auth0.authorize_redirect(redirect_uri='https://hauscloud.me/app/gratitude_journal/callback')
    #return auth0.authorize_redirect(redirect_uri='http://localhost:5000/app/gratitude_journal/callback')


@webapps.route('/gratitude_journal/logout')
def gj_logout():
    'End session on Flask and log user out on Auth0'
    session.clear()
    params = {'returnTo': url_for('webapps.gj_login', _external=True), 'client_id': os.getenv('CLIENT_ID')}
    return redirect(auth0.api_base_url + '/v2/logout?' + urlencode(params))


@webapps.route('/gratitude_journal/callback')
def callback_handler():
    'Calback function to get user data and route to their personal journal'
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
def gj():
    'Render React app: Gratitude Journal'
    # Add apostrophe in right spot
    name = session['jwt_payload']['nickname']
    if name[-1:] == 's':
        name = name[:-1] + "'" + 's'
    else:
        name += "'s"
    return render_template('journal.html', user=name, cache_id=uuid.uuid4(), data=session['jwt_payload'])
