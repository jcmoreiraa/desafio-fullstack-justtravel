from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Tarefa(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(80))
    is_finalizado = db.Column(db.Boolean, default=False)
    tarefa = db.Column(db.String(255), default = 'Essa é uma nova tarefa')

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
