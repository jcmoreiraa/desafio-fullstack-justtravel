import os
from flask import Flask
from flask_cors import CORS
from orm.models import db
from src.routes import  task_bp

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=False)

app.register_blueprint(task_bp, url_prefix='/tasks')

@app.route('/')
def hello():
    return 'Hello, Flask!'

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=3001, debug=True)
