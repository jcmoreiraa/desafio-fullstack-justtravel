from app import app
from orm.models import db, Tarefa
from datetime import datetime

tarefas = [
    {
        
        "titulo": "Entregar relatório de Teoria da Computação",
        "descricao": "Faltam exemplos de execução para a segunda máquina, referências e a explicação dos módulos 2,4.1 e 8 da segunda máquina",
        "status": True,
        "prioridade": "alta",
        "criado_em": "2025-07-12",
        "atualizado_em": "2025-07-12",
    },
    {
    
        "titulo": "Estudar para prova de banco de dados",
        "descricao": "Estudar otimização, transação, timestamp, SQL, SQL3, indexação",
        "status": True,
        "prioridade": "alta",
        "criado_em": "2025-07-12",
        "atualizado_em": "2025-07-12",
    },
    {
        
        "titulo": "Entregar relatório de banco de dados",
        "descricao": "Revisar MEER, regras de negócio, algebra relacional e afins",
        "status": False,
        "prioridade": "urgente",
        "criado_em": "2025-07-12",
        "atualizado_em": "2025-07-12",
    },
    {
        
        "titulo": "Fazer atividade da JustTravel Backend",
        "descricao": "Desenvolver rotas de CRUD em python, organizar ORM, chamar as routes, configurar CORS",
        "status": False,
        "prioridade": "urgente",
        "criado_em": "2025-07-12",
        "atualizado_em": "2025-07-12",
    },
    {
        
        "titulo": "Fazer atividade da JustTravel FrontEnd",
        "descricao": "Criar todos componentes do react, fazer integração com backend, ficar atento a problemas de interface",
        "status": False,
        "prioridade": "alta",
        "criado_em": "2025-07-12",
        "atualizado_em": "2025-07-12",
    },
    {
        
        "titulo": "Procurar erros no Razão Analítico da TITAN",
        "descricao": "Entender comportamentos inesperados do appsscripts e o pq do razão ter ficado desformatado",
        "status": False,
        "prioridade": "media",
        "criado_em": "2025-07-12",
        "atualizado_em": "2025-07-12",
    },
    {
        
        "titulo": "Selenium e Nokogiri ",
        "descricao": "Ler documentação dessas gems ",
        "status": False,
        "prioridade": "baixa",
        "criado_em": "2025-07-12",
        "atualizado_em": "2025-07-12",
    },
    {
    
        "titulo": "Ajuste do site CCI UFBA",
        "descricao": "1) Excluir Equipe e Composição dentro da aba \"Sobre a CCI\".\n3) Na Home colocar foto da Reitoria, entrada da UFBA\n3) Em NOTICIAS E DESTAQUES excluir e DESTAQUES\n4) Em DESTAQUES substituir  por ACESSO RÁPIDO\n7) LINKS ÚTEIS - excluir essa animação",
        "status": True,
        "prioridade": "baixa",
        "criado_em": "2025-07-12",
        "atualizado_em": "2025-07-12",
    },
    {
        
        "titulo": "Estudar redes envolvendo containers Docker",
        "descricao": "Baixar as imagens e testá-las",
        "status": False,
        "prioridade": "baixa",
        "criado_em": "2025-07-12",
        "atualizado_em": "2025-07-12",
    },
    {
        
        "titulo": "Ver preços de SSDs",
        "descricao": "",
        "status": False,
        "prioridade": "baixa",
        "criado_em": "2025-07-12",
        "atualizado_em": "2025-07-12",
    },
]

with app.app_context():
    for t in tarefas:
        criado_em = datetime.strptime(t["criado_em"], "%Y-%m-%d")
        atualizado_em = datetime.strptime(t["atualizado_em"], "%Y-%m-%d")

        tarefa = Tarefa(
            titulo=t["titulo"],
            descricao=t["descricao"],
            status=t["status"],
            prioridade=t["prioridade"],
            criado_em=criado_em,
            atualizado_em=atualizado_em,
        )
        db.session.merge(tarefa) 
    db.session.commit()
    print("Seed finalizado!")
