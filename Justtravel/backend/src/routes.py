from flask import Blueprint
from src.controllers import TarefaController 

usuario_bp = Blueprint('usuario_bp', __name__)
tarefas_bp = Blueprint('tarefas_bp', __name__)


tarefa = TarefaController()

tarefas_bp.route('/', methods=['GET'])(tarefa.listar_tarefas)
tarefas_bp.route('/', methods=['POST'])(tarefa.criar_tarefa)
tarefas_bp.route('/<int:tarefa_id>', methods=['PUT'])(tarefa.update_tarefa)
tarefas_bp.route('/<int:tarefa_id>', methods=['DELETE'])(tarefa.delete_tarefa)
