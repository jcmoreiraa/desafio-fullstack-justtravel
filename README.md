# 📋 Minha Lista de Tarefas | Projeto Fullstack

**🔗 Link da Aplicação:**  
[https://desafio-fullstack-justtravel-inli.vercel.app/](https://desafio-fullstack-justtravel-inli.vercel.app/)

> Uma aplicação web fullstack para gerenciamento de tarefas, desenvolvida com **Next.js (React)** no frontend e **Flask + SQLAlchemy** no backend.  
> O projeto permite organizar tarefas, priorizá-las, acompanhar seu status e manter tudo persistido em um banco PostgreSQL.  
>  
> ⚠️ **Lembre-se:** o backend está hospedado no Render e pode levar alguns segundos para iniciar se estiver inativo.

---

## ✨ Funcionalidades

- ✅ Criação, listagem e exclusão de tarefas  
- 🔁 Marcar tarefa como concluída ou pendente  
- ⚠️ Prioridades customizadas: baixa, média, alta e urgente  
- 📅 Datas de criação e atualização salvas automaticamente  
- 🔍 Busca  
- 📦 Persistência de dados com PostgreSQL  
- 🐳 Suporte a containers Docker para produção  

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- [Next.js (App Router)](https://nextjs.org/)
- TypeScript
- Tailwind CSS
- [Shadcn UI](https://ui.shadcn.dev/)

### Backend
- Python 3.11
- Flask
- Flask-CORS
- SQLAlchemy
- PostgreSQL

### Infra & Deploy
- [Vercel](https://vercel.com/) (Frontend)
- [Render](https://render.com/) (Backend)
- Docker

---

## ⚙️ Como Rodar o Projeto Localmente

### 🔧 Pré-requisitos
- Node.js v18+
- Python 3.11+
- Docker (opcional)
- PostgreSQL local ou containerizado
- Git

---

### 🔙 Backend

```bash
# Clone o repositório
git clone https://github.com/jcmoreiraa/desafio-fullstack-justtravel.git
cd desafio-fullstack-justtravel/backend

# (Recomendado) Crie e ative um ambiente virtual
python -m venv venv

# Windows:
venv\Scripts\activate

# Linux/macOS:
source venv/bin/activate

# Instale as dependências
pip install -r requirements.txt

# Crie o arquivo .env (configure as variáveis conforme seu ambiente)
touch .env

# Inicie a aplicação
python app.py

# Ou se estiver configurado para usar flask cli
flask run



### 🔙 Backend

cd ../front-end

# Instale as dependências
npm install

# Crie o arquivo .env.local (configure as variáveis conforme seu ambiente)
touch .env.local

# Rode a aplicação em modo desenvolvimento
npm run dev


### 🔙 Deploy

Frontend: Vercel

Backend: Render

Banco de dados: PostgreSQL Cloud (opcional)


🧑‍💻 Autor
Julio Cesar Moreira
GitHub: @jcmoreiraa
LinkedIn: linkedin.com/in/jcmoreiraa

