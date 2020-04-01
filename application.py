# from functools import wraps
# import json
# from os import environ as env
# from werkzeug.exceptions import HTTPException
# from dotenv import load_dotenv, find_dotenv
# from authlib.integrations.flask_client import OAuth
# from six.moves.urllib.parse import urlencode

from flask import Flask, render_template, redirect, Blueprint, jsonify, session, url_for
# from flask_cors import CORS
from static.blueprints.api import api
from static.blueprints.webapps import webapps
import uuid
import os

# oauth = OAuth(app)

application = Flask(__name__)
# CORS(application)
# application.register_blueprint(api)
application.register_blueprint(webapps)

@application.route('/')
def redirectHome():
    return redirect('/home', code=301)

@application.route('/home')
def home():
    return render_template('index.html', cache_id=uuid.uuid4())

@application.route('/env_var_test')
def monkey():
    my_dict = {'monkey': os.getenv('monkey')}

    return jsonify(my_dict)

@application.errorhandler(404)
def page_not_found(e):
    return render_template('404.html', cache_id=uuid.uuid4()), 404



if __name__ == "__main__":
    application.run(host='0.0.0.0')
