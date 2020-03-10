from flask import Blueprint, render_template
import uuid

webapps = Blueprint('webapps', __name__, url_prefix='/app')

@webapps.route('/hub')
def menu():
    return render_template('hub.html', cache_id=uuid.uuid4())

@webapps.route('/anime_quote_generator')
def quote_gen():
    return render_template('aqg.html', cache_id=uuid.uuid4())
