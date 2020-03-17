from flask import Blueprint, render_template
import uuid

webapps = Blueprint('webapps', __name__, url_prefix='/app')

@webapps.route('/hub')
def hub():
    return render_template('hub.html', cache_id=uuid.uuid4())

@webapps.route('/anime_quote_generator')
def anime_quote_generator():
    return render_template('aqg.html', cache_id=uuid.uuid4())

@webapps.route('/memory_game')
def memory_game():
    return render_template('mg.html', cache_id=uuid.uuid4())
