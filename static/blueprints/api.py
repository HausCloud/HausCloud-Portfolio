from flask import Blueprint, request, jsonify, abort
from os import listdir
from os.path import isfile, join
from flask_accept import accept
from uuid import uuid4

api = Blueprint('api', __name__ , url_prefix='/api')

@api.route('/image_hash', methods=['GET'])
@accept('application/json')
def image_hash():
    dictionary = {}
    path = './static/images/fake_persons/'
    files = [f for f in listdir(path) if isfile(join(path, f))]

    if len(files) == 0:
        abort(400, description="No files available")
    
    for file_name in files:
        dictionary[file_name] = uuid4()

    return jsonify(dictionary)
