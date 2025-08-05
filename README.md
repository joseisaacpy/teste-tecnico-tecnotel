# 🧪 Teste Técnico - API de Tarefas

API RESTful desenvolvida como parte de um teste técnico para gerenciar tarefas (To-Do List), utilizando **Node.js**, **Express**, **Prisma** e **SQLite**.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- Prisma ORM
- SQLite
- Dotenv
- Nodemon (para ambiente de desenvolvimento)

---

## ⚙️ Funcionalidades

- ✅ Criar uma nova tarefa
- 🔍 Visualizar todas as tarefas
- 🔍 Buscar tarefa por ID
- ✏ Atualizar uma tarefa existente
- 🗑 Excluir uma tarefa

---

## 🗂 Estrutura do projeto

```bash
📦 teste-tecnico-tecnotel
├─ .gitattributes
├─ .gitignore
├─ README.md
├─ lib
│  └─ prismaClient.js
├─ package-lock.json
├─ package.json
├─ prisma
│  └─ schema.prisma
├─ routes
│  └─ tasksRouter.js
└─ server.js
```

## 📦 Instalação

Clone o repositório:

```
git clone https://github.com/joseisaacpy/teste-tecnico-tecnotel

cd teste-tecnico-tecnotel
```

## Instale as dependências:

```
npm install
```

## Configure o Prisma:

```
npx prisma generate
npx prisma db push
```

🔹 Um arquivo de banco de dados SQLite (`dev.db`) será criado automaticamente na pasta `prisma/`.

## Inicie o servidor:

```
npm run dev
```

## 📡 Endpoints da API

| Método | Rota         | Descrição                     |
| ------ | ------------ | ----------------------------- |
| POST   | `/tasks`     | Cria uma nova tarefa          |
| GET    | `/tasks`     | Lista todas as tarefas        |
| GET    | `/tasks/:id` | Busca uma tarefa pelo ID      |
| PUT    | `/tasks/:id` | Atualiza uma tarefa existente |
| DELETE | `/tasks/:id` | Deleta uma tarefa             |

## 👤 Autor

- José Isaac Nascimento
- [LinkedIn](https://www.linkedin.com/in/jos%C3%A9-isaac-nascimento/)

## 📝 Licença

Este projeto está sob a Licença MIT.
