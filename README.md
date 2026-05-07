# TaskFlow API 🚀

API REST simples para gerenciamento de tarefas desenvolvida com Node.js, Express, Sequelize e SQLite.

## 📌 Funcionalidades

* Criar tarefas
* Listar tarefas
* Buscar tarefa por ID
* Atualizar tarefa
* Concluir tarefa
* Deletar tarefa
* Filtrar tarefas concluídas

---

# 🛠️ Tecnologias Utilizadas

* Node.js
* Express
* Sequelize
* SQLite
* Insomnia
* Git/GitHub

---

# 📁 Estrutura do Projeto

```bash
TASKFLOW
│
├── controllers
│   └── taskController.js
│
├── models
│   └── Task.js
│
├── routes
│   └── taskRoutes.js
│
├── database.js
├── database.sqlite
├── server.js
├── package.json
└── .gitignore
```

---

# 🚀 Como Rodar o Projeto

## 1️⃣ Clonar o repositório

```bash
git clone https://github.com/juvalent/taskflow.git
```

## 2️⃣ Entrar na pasta do projeto

```bash
cd taskflow
```

## 3️⃣ Instalar as dependências

```bash
npm install
```

## 4️⃣ Instalar os pacotes necessários

```bash
npm install express sequelize sqlite3 cors dotenv nodemon
```

---

# ▶️ Rodar o servidor

## Modo normal

```bash
node server.js
```

## Modo desenvolvimento

```bash
npm run dev
```

---

# ⚙️ Scripts do package.json

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---


# 🧪 Testes

As rotas da API podem ser testadas utilizando:

* Insomnia
* Postman

---

# 👩‍💻 Desenvolvido por

Julliane Valentin
