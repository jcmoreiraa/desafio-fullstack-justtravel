import enum
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class PriorityEnum(enum.Enum):
    baixa = "baixa"
    media = "media"
    alta = "alta"
    alarmante = "alarmante"

class Tarefa(db.Model):
    __tablename__ = "tarefas"

    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(80), nullable=False)
    descricao = db.Column(db.String(255), default="")
    status = db.Column(db.Boolean, default=False)
    prioridade = db.Column(db.Enum(PriorityEnum), nullable=False, default=PriorityEnum.baixa)
    criado_em = db.Column(db.DateTime, default=datetime.utcnow)
    atualizado_em = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    comentarios = db.relationship("Comentario", backref="tarefa", lazy=True)

    def __repr__(self):
        return f"<Tarefa {self.titulo}>"

class Comentario(db.Model):
    __tablename__ = "comentarios"

    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(db.Integer, db.ForeignKey("tarefas.id"), nullable=False)
    conteudo = db.Column(db.String(255), nullable=False)
    criado_em = db.Column(db.DateTime, default=datetime.utcnow)


with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
