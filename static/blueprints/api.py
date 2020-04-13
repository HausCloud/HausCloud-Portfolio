import uuid
from functools import wraps
from flask import Blueprint, request, jsonify, abort, session, redirect
#from flask_accept import accept


api = Blueprint('api', __name__ , url_prefix='/api')

# Decorator to check user login and redirect to appropriate route
def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if 'profile' not in session:
            # Redirect to Login page here
            return redirect('/app/gratitude_journal')
        return f(*args, **kwargs)
    return decorated

@api.route('/gj_test')
@requires_auth
def test():
    return '<h1>success</h1>'