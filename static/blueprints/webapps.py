from flask import Blueprint

webapps = Blueprint('webapps', __name__, url_prefix='/app')

@webapps.route('/webapp1')
def webapps1():
    return '<h1> Hello World! </h1>'
