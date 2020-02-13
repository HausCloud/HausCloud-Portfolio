from flask import Flask, render_template, redirect, abort
from flask_cors import CORS
from static.blueprints.api import api
from static.blueprints.mainpage import mainpage
from static.blueprints.webapps import webapps
from uuid import uuid4

application = Flask(__name__)
CORS(application)
application.register_blueprint(api)
application.register_blueprint(mainpage)
application.register_blueprint(webapps)

@application.route('/')
def redirectHome():
    return redirect('/home', code=301)

@application.route('/home')
def home():
    return render_template('index.html', cache_id=uuid4())

if __name__ == "__main__":
    application.run(host='0.0.0.0', debug=True)

# if __name__ == "__main__":
#     application.debug = True
#     application.run()
