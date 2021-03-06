'Base flask application for AWS Elastic Beanstalk'

import uuid
import os
from werkzeug.exceptions import HTTPException
from flask import Flask, render_template, redirect, jsonify, session
from static.blueprints.api import api
from static.blueprints.webapps import webapps

application = Flask(__name__)
application.register_blueprint(api)
application.register_blueprint(webapps)

application.secret_key = os.getenv('CLIENT_SECRET')
#application.debug = True

@application.route('/')
def redirect_home():
    'Redirect all traffic to /home'
    return redirect('/home', code=301)

@application.route('/home')
def home():
    'Render html file for /home'
    return render_template('index.html', cache_id=uuid.uuid4())

@application.errorhandler(404)
def not_found():
    'Render 404 page for invalid routes'
    return render_template('404.html', cache_id=uuid.uuid4()), 404

@application.errorhandler(Exception)
def exception_handler(ex):
    'Global exception handler for entire application'
    # Workaround for Auth0 redirect error
    auth_redirect_error = "Invalid_request: Invalid redirect_uri. Expected type 'string' but found type undefined.".lower()
    if auth_redirect_error == str(ex).lower():
        redirect('https://hauscloud.me/app/gratitude_journal/personal')
    response = jsonify(message=str(ex))
    response.status_code = (ex.code if isinstance(ex, HTTPException) else 500)
    return response

if __name__ == "__main__":
    application.run(host='0.0.0.0')
