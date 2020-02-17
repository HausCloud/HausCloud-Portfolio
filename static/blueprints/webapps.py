from flask import Blueprint

webapps = Blueprint('webapps', __name__, url_prefix='/app')

@webapps.route('/webapp1')
def webapps1():
    return '<h1> Hello World! </h1>'
# from flask import Blueprint, render_template
# from uuid import uuid4

# webapps = Blueprint('webapps', __name__, url_prefix='/app')

# @webapps.route('/hub')
# def menu():
#     return render_template('index.html', cache_id=uuid4())
