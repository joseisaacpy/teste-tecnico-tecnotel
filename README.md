# 🧪 Teste Técnico - API de Tarefas

API RESTful desenvolvida como parte de um teste técnico para gerenciar tarefas (To-Do List), utilizando **Node.js**, **Express**, **Prisma** e **MongoDB**.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- Prisma ORM
- MongoDB (via Atlas)
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

## Configure o .env:

Crie um arquivo .env na raiz com a seguinte variável:

```
DATABASE_URL="sua-url-do-mongodb"
```

⚠️ Use o MongoDB Atlas ou instância local. Certifique-se de que o banco "tarefas" exista ou será criado automaticamente.

## Configure o Prisma:

```
npx prisma generate
npx prisma db push
```

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
- [LinkedIn]()

## 📝 Licença

Este projeto está sob a Licença MIT.
