from wsgiref import headers
from flask import Flask
from flask_cors import CORS, cross_origin




app = Flask(__name__)
CORS(app, resources={r"/create": {"origins": "https//wemagine.niekmuijs.nl"}})