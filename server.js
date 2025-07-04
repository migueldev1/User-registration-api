import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";
import cors from "cors";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/usuarios", async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: Number(req.body.age),
    },
  });

  res.status(201).json(req.body);
});

app.get("/usuarios", async (req, res) => {
  let users = [];

  if (req.query) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        email: req.query.email,
        age: req.query.age ? Number(req.query.age) : undefined,
      },
    });
  } else {
    users = await prisma.user.findMany();
  }

  res.status(200).json(users);
});

app.put("/usuarios/:id", async (req, res) => {
  console.log(req);

  await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: Number(req.body.age),
    },
  });

  res.status(201).json(req.body);
});

app.delete("/usuarios/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: "Usuário deletado com Sucesso!" });
});

app.listen(3000);

/* 
    - GET: Buscar/Ler usuários
    - POST: Enviar/Criar um novo usuário
    - PUT: Atualizar dados inteiros de um recurso
    - Patch: Atualizar parcialmente um recurso
    - Delete: Excluir um recurso
*/

/* 
    Criar API de Usuários 

    - Criar um usuário
    - Listar todos os usúarios
    - Editar um usuário
    - Deletar um usuário
*/
