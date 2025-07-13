import os
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from orm.models import db
from src.routes import usuario_bp, tarefas_bp

load_dotenv()

app = Flask(__name__)
from flask import Flask
from flask_cors import CORS
import os

app = Flask(__name__)

CORS(app, 
     origins=[
         "http://localhost:3000", 
         "https://desafio-fullstack-justtravel-inli.vercel.app",
         os.getenv("FRONTEND_PROD_URL", "https://desafio-fullstack-justtravel-inli.vercel.app")
     ],
     methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
     allow_headers=["Content-Type", "Authorization"],
     supports_credentials=True,
     max_age=86400)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

app.register_blueprint(usuario_bp)
app.register_blueprint(tarefas_bp, url_prefix='/tasks')

@app.route('/')
def hello():
    return 'Hello, Flask!'

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(
        host='0.0.0.0',
        port=int(os.environ.get('FLASK_PORT', 3001)),
        debug=os.environ.get('FLASK_DEBUG', '1') == '1'
    )