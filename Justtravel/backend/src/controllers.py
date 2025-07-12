from datetime import datetime
from orm.models import Tarefa, db
from flask import request, jsonify

class TarefaController():
  @staticmethod
  def listar_tarefas():
        try:
            tarefas = Tarefa.query.order_by(Tarefa.id.asc()).all()
            resultado = []
            for tarefa in tarefas:
                resultado.append({
                    'id': tarefa.id,
                    'titulo': tarefa.titulo,
                    'descricao':tarefa.descricao,
                    'status': tarefa.status,
                    'prioridade': tarefa.prioridade.name,
                    'criado_em': tarefa.criado_em.strftime('%Y-%m-%d'),
                    'atualizado_em': tarefa.atualizado_em.strftime('%Y-%m-%d')
                })
            return jsonify(resultado)
        except Exception as error:
            return jsonify({'Erro interno no servidor': str(error)}), 500
  @staticmethod


  def criar_tarefa():
    try:
        data = request.get_json()

        titulo = data.get('titulo')
        descricao = data.get('descricao', '')
        prioridade = data.get('prioridade', 'media')
        status = data.get('status', False)
        criado_em = datetime.utcnow()
        atualizado_em = datetime.utcnow()

        if not titulo:
            return jsonify({'error': 'Título é obrigatório'}), 400

        nova_tarefa = Tarefa(
            titulo=titulo,
            descricao=descricao,
            prioridade=prioridade,
            status=status,
            criado_em=criado_em,
            atualizado_em=atualizado_em
        )
        db.session.add(nova_tarefa)
        db.session.commit()

        return jsonify({
            'id': nova_tarefa.id,
            'titulo': nova_tarefa.titulo,
            'descricao': nova_tarefa.descricao,
            'prioridade': nova_tarefa.prioridade.name,
            'status': nova_tarefa.status,
            'criado_em': nova_tarefa.criado_em.isoformat(),
            'atualizado_em': nova_tarefa.atualizado_em.isoformat()
        }), 201

    except Exception as error:
        db.session.rollback()
        return jsonify({'Erro interno no servidor': str(error)}), 500

  @staticmethod
  def update_tarefa(tarefa_id):
    try:
        tarefa = Tarefa.query.get(tarefa_id)
        if tarefa:
            tarefa.status = not tarefa.status
            tarefa.atualizado_em = datetime.utcnow()
            db.session.commit()

            return jsonify({
                'id': tarefa.id,
                'titulo': tarefa.titulo,
                'descricao': tarefa.descricao,
                'prioridade': tarefa.prioridade.name,
                'status': tarefa.status,
                'criado_em': tarefa.criado_em.isoformat(),
                'atualizado_em': tarefa.atualizado_em.isoformat()
            }), 200

        return jsonify({'mensagem': 'Tarefa não encontrada'}), 404
    except Exception as error:
        db.session.rollback()
        return jsonify({'Erro interno no servidor': str(error)}), 500

  @staticmethod
  def delete_tarefa(tarefa_id):
    try:
        tarefa = Tarefa.query.get(tarefa_id)
        if tarefa:
            tarefa_info = {
                'id': tarefa.id,
                'titulo': tarefa.titulo,
                'descricao': tarefa.descricao,
                'prioridade': tarefa.prioridade.name,
                'status': tarefa.status,
                'criado_em': tarefa.criado_em.isoformat(),
                'atualizado_em': tarefa.atualizado_em.isoformat()
            }

            db.session.delete(tarefa)
            db.session.commit()

            return jsonify({
                'mensagem': 'Tarefa deletada com sucesso',
                'tarefa': tarefa_info
            }), 200

        return jsonify({'mensagem': 'Tarefa não foi encontrada'}), 404
    except Exception as error:
        db.session.rollback()
        return jsonify({'Erro interno no servidor': str(error)}), 500
