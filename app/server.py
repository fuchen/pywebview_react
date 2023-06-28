from flask import Flask, send_from_directory

server = Flask(__name__)
server.config['SEND_FILE_MAX_AGE_DEFAULT'] = 1

@server.route("/api/hello")
def hello_world():
    return "Hello, World!"

@server.route("/<path>")
def files(path):
    return send_from_directory('../webui/dist', path)

@server.route("/")
def index():
    return send_from_directory('../webui/dist', 'index.html')
