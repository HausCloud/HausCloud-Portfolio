from flask import Blueprint, render_template
from uuid import uuid4

webapps = Blueprint('webapps', __name__, url_prefix='/app')

@webapps.route('/hub')
def menu():
    return render_template('hub.html', cache_id=uuid4())

@webapps.route('/anime_quote_generator')
def webapps1():
    return render_template('aqg.html', cache_id=uuid4())
