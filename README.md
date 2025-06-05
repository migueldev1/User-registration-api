# Backend - Cadastro de Usuários

API REST da aplicação Cadastro de Usuários, construído com Node.js, Express e Prisma, utilizando **MongoDB** como banco de dados.

## Tecnologias

- Node.js
- Express
- Prisma ORM
- Banco de dados (MongoDB)
- CORS

## Funcionalidades

- CRUD completo de usuários (criar, ler, atualizar, deletar)
- Banco de dados gerenciado via Prisma

## Endpoints principais
POST /usuarios - Cria um novo usuário

GET /usuarios - Lista todos os usuários

PUT /usuarios/:id - Atualiza usuário pelo ID

DELETE /usuarios/:id - Remove usuário pelo ID

## Como rodar localmente

1. Clone este repositório:

```bash
git clone https://github.com/migueldev1/user-registration-api.git
```
2. Instale as dependências:

```bash
npm install
```
3. Crie um arquivo .env na raiz do projeto, exemplo:

```ini
DATABASE_URL="mongodb+srv://usuario:senha@cluster0.mongodb.net/nomeDoBanco?retryWrites=true&w=majority"
```
4. Gere o cliente do prisma:

```bash
npx prisma generate
```

Inicie o servidor:

```bash
node server.js
```

A API estará rodando em http://localhost:3000

## Frontend

O frontend deste projeto está disponível em outro repositório:
https://github.com/migueldev1/user-registration-ui
