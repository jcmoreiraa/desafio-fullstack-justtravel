from datetime import datetime
from orm.models import Tarefa, db
from flask import request, jsonify

class TaskController:
  
    @staticmethod
    def get_all_tasks():
        try:
            tasks = Tarefa.query.order_by(Tarefa.id.asc()).all()
            result = []
            for task in tasks:
                result.append({
                    'id': task.id,
                    'titulo': task.titulo,
                    'descricao': task.descricao,
                    'status': task.status,
                    'prioridade': task.prioridade.name,
                    'criado_em': task.criado_em.strftime('%Y-%m-%d'),
                    'atualizado_em': task.atualizado_em.strftime('%Y-%m-%d')
                })
            return jsonify(result)
        except Exception as error:
            return jsonify({'Erro interno no servidor': str(error)}), 500

    @staticmethod
    def create_task():
        try:
            data = request.get_json()

            titulo = data.get('titulo')
            descricao = data.get('descricao', '')
            prioridade = data.get('prioridade', 'media')
            status = data.get('status', False)
            created_at = datetime.utcnow()
            updated_at = datetime.utcnow()

            if not titulo:
                return jsonify({'error': 'Título é obrigatório'}), 400

            new_task = Tarefa(
                titulo=titulo,
                descricao=descricao,
                prioridade=prioridade,
                status=status,
                criado_em=created_at,
                atualizado_em=updated_at
            )

            db.session.add(new_task)
            db.session.commit()

            return jsonify({
                'id': new_task.id,
                'titulo': new_task.titulo,
                'descricao': new_task.descricao,
                'prioridade': new_task.prioridade.name,
                'status': new_task.status,
                'criado_em': new_task.criado_em.isoformat(),
                'atualizado_em': new_task.atualizado_em.isoformat()
            }), 201

        except Exception as error:
            db.session.rollback()
            return jsonify({'Erro interno no servidor': str(error)}), 500

    @staticmethod
    def update_task(task_id):
        try:
            task = Tarefa.query.get(task_id)
            if task:
                task.status = not task.status
                task.atualizado_em = datetime.utcnow()
                db.session.commit()

                return jsonify({
                    'id': task.id,
                    'titulo': task.titulo,
                    'descricao': task.descricao,
                    'prioridade': task.prioridade.name,
                    'status': task.status,
                    'criado_em': task.criado_em.isoformat(),
                    'atualizado_em': task.atualizado_em.isoformat()
                }), 200

            return jsonify({'mensagem': 'Tarefa não encontrada'}), 404
        except Exception as error:
            db.session.rollback()
            return jsonify({'Erro interno no servidor': str(error)}), 500

    @staticmethod
    def delete_task(task_id):
        try:
            task = Tarefa.query.get(task_id)
            if task:
                task_info = {
                    'id': task.id,
                    'titulo': task.titulo,
                    'descricao': task.descricao,
                    'prioridade': task.prioridade.name,
                    'status': task.status,
                    'criado_em': task.criado_em.isoformat(),
                    'atualizado_em': task.atualizado_em.isoformat()
                }

                db.session.delete(task)
                db.session.commit()

                return jsonify({
                    'mensagem': 'Tarefa deletada com sucesso',
                    'tarefa': task_info
                }), 200

            return jsonify({'mensagem': 'Tarefa não foi encontrada'}), 404
        except Exception as error:
            db.session.rollback()
            return jsonify({'Erro interno no servidor': str(error)}), 500
