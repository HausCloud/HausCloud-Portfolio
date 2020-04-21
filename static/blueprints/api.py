'Blueprint for api'

import datetime
import os
from functools import wraps
from flask import Blueprint, request, jsonify, abort, session, redirect
from db_engine import Database

api = Blueprint('api', __name__, url_prefix='/api')


def requires_auth(f):
    'Wrapper function'
    @wraps(f)
    def decorated(*args, **kwargs):
        'Decorator for validating token and route access'
        if 'profile' not in session:
            # Redirect to Login page here
            return redirect('/app/gratitude_journal')
        return f(*args, **kwargs)
    return decorated


@api.route('gratitude_journal/delete', methods=['POST'])
@requires_auth
def delete_entry():
    'Route to delete entry by user id'

    data = request.get_json(silent=True)

    # Validate incoming request
    if data is None:
        abort(400, description='Data must be valid json and \
            Content-Type must be set to application/json.')
    elif 'user_id' not in data:
        abort(400, description='user_id attribute must exist in request.')
    elif 'entry_id' not in data:
        abort(400, description='entry_id attribute must exist in request.')

    # Database setup
    config = {'host': os.getenv('RDS_HOSTNAME'), 'username': os.getenv('RDS_USERNAME'),
              'password': os.getenv('RDS_PASSWORD'), 'port': os.getenv('RDS_PORT'),
              'dbname': 'postgres'}

    instance = Database(**config)

    if instance.connect() is not True:
        instance.close()
        abort(500, description='Connection to database failed.')

    if instance.exist(data['user_id']) is not True:
        instance.close()
        abort(400, description='User not in database to add entry.')

    instance.delete(data['user_id'], data['entry_id'])
    instance.close()

    return jsonify({'success': 'If entry exist, it is deleted.'})


@api.route('/gratitude_journal/insert', methods=['POST'])
@requires_auth
def insert_entry_for_id():
    'Route to add entry by user id'

    # Validate incoming request
    data = request.get_json(silent=True)
    if data is None:
        abort(400, description='Data must be valid json and \
            Content-Type must be set to application/json.')
    if 'user_id' not in data:
        abort(400, description='user_id attribute must exist in request.')
    if 'text' not in data or 'mood' not in data or 'date' not in data:
        abort(400, description='text, mood, and date attributes must exist in request.')
    if type(data['mood']) is not str or type(data['date']) is not str:
        abort(400, description='Values for mood and date must be strings.')
    if type(data['text']) is not list and len(data['text']) != 2:
        abort(400, description='Value for text must be an array with a length of 2.')
    if type(data['text'][0]) is not str or type(data['text'][1]) is not str:
        abort(400, description='Array must be filled with strings')

    possible_moods = {'nope', 'unhappy', 'meh', 'happy', 'exhuberant'}
    possible_text = {"I'm grateful for", 'So happy that', '#blessed'}

    if data['mood'] not in possible_moods:
        abort(400, description="Mood doesn't match any 'valid' moods")
    if data['text'][0] not in possible_text:
        abort(400, description='First value in array must be a valid prefix.')
    if len(data['text'][1]) > 127:
        abort(400, description='Post too long.')

    # Attempt to parse incoming date string from new Date()
    try:
        date = datetime.datetime.strptime(
            data['date'], '%m/%d/%Y, %I:%M:%S %p')
    except ValueError:
        abort(400, description='Parse error encountered due to invalid string. \
            Use new Date.toLocaleString().')

    # Database setup
    config = {'host': os.getenv('RDS_HOSTNAME'), 'username': os.getenv('RDS_USERNAME'),
              'password': os.getenv('RDS_PASSWORD'), 'port': os.getenv('RDS_PORT'),
              'dbname': 'postgres'}
    instance = Database(**config)

    if instance.connect() is not True:
        instance.close()
        abort(500, description='Connection to database failed.')

    if instance.exist(data['user_id']) is not True:
        instance.close()
        abort(400, description='User not in database to add entry.')

    result = instance.all_entries(data['user_id'])

    if 'fail_transaction_error' in result or 'syntax_error' in result or 'db_error' in result:
        instance.close()
        return abort(500, description=str(result))

    if len(result) > 0:
        sorted_dates = sorted([datetime.datetime.strptime(
            val['date'], '%m/%d/%Y %I:%M:%S %p') for val in result.values()], reverse=True)
        if sorted_dates[0] >= date:
            instance.close()
            abort(400, description='Incoming date precedes latest entry date.')

    result = instance.add(data['user_id'], data['text'],
                          data['mood'], date.strftime('%m/%d/%Y %I:%M:%S %p'))

    instance.close()
    if result is True:
        return jsonify({'success': 'Entry added'})
    return jsonify({'failure': 'Unable to add entry'})


@api.route('/gratitude_journal/all', methods=['POST'])
@requires_auth
def grab_entries_for_id():
    'Route to grab all entries for corresponding user id'
    data = request.get_json(silent=True)

    # Validate incoming request
    if data is None:
        abort(400, description='Data must be valid json and \
        Content-Type must be set to application/json.')
    elif 'user_id' not in data:
        abort(400, description='user_id attribute must exist in request.')

    # Database setup
    config = {'host': os.getenv('RDS_HOSTNAME'), 'username': os.getenv('RDS_USERNAME'),
              'password': os.getenv('RDS_PASSWORD'), 'port': os.getenv('RDS_PORT'),
              'dbname': 'postgres'}

    instance = Database(**config)

    if instance.connect() is not True:
        instance.close()
        abort(500, description='Connection to database failed.')

    existence_check = instance.exist(data['user_id'])

    # Check if user exist and creates one if not
    if existence_check is not True and type(existence_check) is dict \
            and 'nouser_error' in existence_check:
        instance.create(data['user_id'])
        instance.close()
        return jsonify({'entries': []})

    result = instance.all_entries(data['user_id'])

    if 'fail_transaction_error' in result or 'syntax_error' in result or 'db_error' in result:
        instance.close()
        return abort(500, description=str(result))

    # Sort all entries by most recent date
    response = sorted([[key, val] for key, val in result.items()],
                      key=lambda x: datetime.datetime.strptime(
                          x[1]['date'], '%m/%d/%Y %I:%M:%S %p'), reverse=True)

    for index, item in enumerate(response):
        response[index][1]['date'] = datetime.datetime.strptime(
            item[1]['date'], '%m/%d/%Y %I:%M:%S %p').strftime('%b %d %Y @ %-I:%M%p')

    instance.close()
    return jsonify({'entries': response})
