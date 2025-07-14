from flask import Blueprint
from src.controllers import TaskController

task_bp = Blueprint('task_bp', __name__)


task = TaskController()

task_bp.route('/', methods=['GET'])(task.get_all_tasks)
task_bp.route('/', methods=['POST'])(task.create_task)
task_bp.route('/<int:task_id>', methods=['PUT'])(task.update_task)
task_bp.route('/<int:task_id>', methods=['DELETE'])(task.delete_task)
