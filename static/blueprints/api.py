from functools import wraps
from flask import Blueprint, request, jsonify, abort, session, redirect
from db_engine import Database
import uuid
import os

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

@api.route('/gratitude_journal/all', methods=['POST'])
@requires_auth
def grab_entries_for_id():
    data = request.get_json(silent=True)
    if data is None:
        abort(400, description='Data must be valid json and Content-Type must be set to application/json.')
    elif 'user_id' not in data:
        abort(400, description='User ID must be provided within JSON.')

    config = {'host': os.getenv('RDS_HOSTNAME'), 'username': os.getenv('RDS_USERNAME'),'password': os.getenv('RDS_PASSWORD'),'port': os.getenv('RDS_PORT'),'dbname':'postgres'}

    instance = Database(**config)

    connection_attempt = instance.connect()

    if connection_attempt is not True:
        instance.close()
        return abort(500, description='Connection to database failed.')
    
    existence_check = instance.exist(data['user_id'])

    if existence_check is not True:
        instance.close()
        return abort(400, description='User ID was not found in the database.')

    result = instance.all_entries(data['user_id'])

    if 'error' in result:
        instance.close()
        return abort(500, description=str(result))

    instance.close()

    return jsonify({'entries': result})