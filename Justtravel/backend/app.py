import os
from flask import Flask
from flask_cors import CORS
from src.routes import usuario_bp, tarefas_bp  
from orm.models import db  

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000",""])

CORS(app, supports_credentials=True)


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@db:5432/postgres'
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
        debug=bool(os.environ.get('FLASK_DEBUG', True)),
        
    )
