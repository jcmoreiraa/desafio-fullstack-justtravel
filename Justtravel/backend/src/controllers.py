from orm.models import Tarefa, db
from flask import request, jsonify

class TarefaController():
  @staticmethod
  def listar_tarefas():
    try:
        tarefas = Tarefa.query.all()
        resultado = []
        for tarefa in tarefas:
            resultado.append({
                'id': tarefa.id,
                'nome': tarefa.nome,
                'is_finalizado': tarefa.is_finalizado
            })
        return jsonify(resultado)
    except Exception as error:
        return jsonify({'Erro interno no servidor': str(error)}), 500

  @staticmethod
  def criar_tarefa():
    try:
        data = request.get_json()
        nome = data.get('nome')
        is_finalizado = data.get('is_finalizado', False)

        if not nome:
            return jsonify({'error': 'Nome é obrigatório'}), 400

        nova_tarefa = Tarefa(nome=nome, is_finalizado=is_finalizado)
        db.session.add(nova_tarefa)
        db.session.commit()

        return jsonify({
            'id': nova_tarefa.id,
            'nome': nova_tarefa.nome,
            'is_finalizado': nova_tarefa.is_finalizado
        }), 201

    except Exception as error:
        db.session.rollback()  
        return jsonify({'Erro interno no servidor': str(error)}), 500
  @staticmethod
  def update_tarefa(tarefa_id):
    try:
        tarefa = Tarefa.query.get(tarefa_id)
        if tarefa:
             data = request.get_json()
             nome = data.get('nome')
             is_finalizado = data.get('is_finalizado')
             if nome is not None:
                tarefa.nome = nome
             if is_finalizado is not None:
                tarefa.is_finalizado = is_finalizado
                db.session.commit()

             return jsonify({
            'id': tarefa.id,
            'nome': tarefa.nome,
            'is_finalizado': tarefa.is_finalizado
        })
             
        return jsonify('N encontrado'), 204
    except Exception as error:
        return jsonify({'Erro interno no servidor': str(error)}), 500

  @staticmethod
  def delete_tarefa(tarefa_id):
    try:
        tarefa = Tarefa.query.get(tarefa_id)
        if tarefa:
             db.session.delete(tarefa)
             db.session.commit()

             return jsonify({'message': 'Tarefa deletada com sucesso'}), 200
        return jsonify({'Tarefa não foi encontrada'}), 204
    except Exception as error:
        db.session.rollback()
        return jsonify({'Erro interno no servidor': str(error)}), 500
        
