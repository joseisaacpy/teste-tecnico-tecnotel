// Imports
import cors from "cors";
import express from "express";
import tasksRouter from "./routes/tasksRouter.js";

// Constantes
const app = express(); // instância do express

// Middlewares
app.use(cors()); // para evitar erros de CORS e aceitar requisições de outras origens
app.use(express.json()); // para aceitar JSON no corpo das requisições

// Rotas
// Rota principal
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Faz uso das rotas do tasksRouter
app.use("/tasks", tasksRouter);

// Rota de erro
app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

// Servidor em execução
app.listen(3000, () =>
  console.log(`Servidor rodando em http://localhost:3000`)
);
