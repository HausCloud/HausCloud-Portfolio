from werkzeug.exceptions import HTTPException
from flask import Flask, render_template, redirect, Blueprint, jsonify, request
from static.blueprints.api import api
from static.blueprints.webapps import webapps
import uuid
import os

application = Flask(__name__)
application.register_blueprint(api)
application.register_blueprint(webapps)

application.secret_key = os.getenv('oauth_client_secret')
#application.debug = True

@application.route('/')
def redirectHome():
    return redirect('/home', code=301)

@application.route('/home')
def home():
    return render_template('index.html', cache_id=uuid.uuid4())

@application.errorhandler(404)
def page_not_found(e):
    return render_template('404.html', cache_id=uuid.uuid4()), 404

@application.errorhandler(Exception)
def global_exception_handler(ex):
    response = jsonify(message=str(ex))
    response.status_code = (ex.code if isinstance(ex, HTTPException) else 500)
    return response

if __name__ == "__main__":
    application.run(host='0.0.0.0')
