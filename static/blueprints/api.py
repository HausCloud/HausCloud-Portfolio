from flask import Blueprint, request, jsonify, abort

api = Blueprint('api', __name__ , url_prefix='/api')
