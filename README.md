# 📋 Minha Lista de Tarefas | Projeto Fullstack

**🔗 Link da Aplicação:**  
[https://desafio-fullstack-justtravel-inli.vercel.app](https://desafio-fullstack-justtravel-inli.vercel.app)

> Uma aplicação web fullstack para gerenciamento de tarefas, desenvolvida com **Next.js (React)** no frontend e **Flask + SQLAlchemy** no backend.  
> Permite organizar tarefas, priorizá-las, acompanhar seu status e manter tudo salvo em um banco PostgreSQL.  

> ⚠️ **Atenção:** O backend está hospedado no Render, então pode demorar algum tempo para responder se estiver inativo.

---

## ✨ Funcionalidades

- ✅ Criar, listar, atualizar e excluir tarefas
- 🔁 Marcar tarefa como pendente ou concluída
- ⚠️ Prioridades: baixa, média, alta e urgente
- 📅 Datas de criação e atualização automáticas
- 🔍 Busca por título
- 📦 Persistência com PostgreSQL
- 🐳 Suporte completo a Docker para desenvolvimento e deploy

---

## 🛠️ Tecnologias Utilizadas

### 💻 Frontend
- [Next.js](https://nextjs.org/)
- TypeScript
- Tailwind CSS
- [shadcn/ui](https://ui.shadcn.dev/)

### 🐍 Backend
- Python 3.11
- Flask
- Flask-CORS
- SQLAlchemy
- PostgreSQL

### ☁️ Infra & Deploy
- Vercel (Frontend)
- Render (Backend)
- Docker + Docker Compose
- pgAdmin

---

## 🚀 Como Rodar o Projeto Localmente

### 🔧 Pré-requisitos
- Git
- Docker e Docker Compose
- (opcional) Python 3.11+ e Node.js 18+ para rodar fora de container

---

### 🐳 Usando Docker (Recomendado)

# 1. Clone o repositório
git clone https://github.com/jcmoreiraa/desafio-fullstack-justtravel.git

cd desafio-fullstack-justtravel/Justtravel/backend

# 2. Suba os containers
docker-compose up --build -d

**Atenção:** Não se esqueça que o container PostgreSQL será alocado à porta 5432, então certifique-se que essa porta não estará em uso no momento da build


### 💀 Executando manualmente




# Acesse a pasta do backend
cd Justtravel/backend

# Crie e ative um ambiente virtual
python -m venv venv

# Configure seu .env com a string de conexão do seu banco PostgreSQL local, por exemplo:
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres

# Instale as dependências
pip install -r requirements.txt

# Inicie o servidor
python app.py

# Acesse a pasta do frontend
cd ../front-end

# Instale as dependências
npm install

# Rode o projeto em modo dev
npm run dev


# 📖 Toda documentação do código pode ser acessada em Documentação_App_de_Tasks.pdf
 


🧑‍💻 Autor
Julio Cesar Moreira
📌 GitHub: @jcmoreiraa

