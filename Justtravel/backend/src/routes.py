from flask import Blueprint
from src.controllers import listar_tarefas, criar_tarefa, update_tarefa, delete_tarefa

usuario_bp = Blueprint('usuario_bp', __name__)

usuario_bp.route('/tarefas', methods=['GET'])(listar_tarefas)
usuario_bp.route('/tarefas', methods=['POST'])(criar_tarefa)
usuario_bp.route('/tarefas/<int:tarefa_id>', methods=['PUT'])(update_tarefa)
usuario_bp.route('/tarefas/<int:tarefa_id>', methods=['DELETE'])(delete_tarefa)
