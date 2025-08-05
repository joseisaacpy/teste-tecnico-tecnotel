// Imports
import { Router } from "express";
import prisma from "../lib/prismaClient.js";

// Constantes
const tasksRouter = Router();

// Rotas
// Cria uma nova tarefa
tasksRouter.post("/", async (req, res) => {
  try {
    // Cria uma nova tarefa
    const task = await prisma.task.create({
      data: req.body,
    });
    // Envia a tarefa
    res.json({
      message: "Tarefa criada com sucesso.",
      task,
    });
  } catch (error) {
    res.status(500).send("Erro ao criar tarefa.");
  }
});

// Pega todas as tarefas
tasksRouter.get("/", async (req, res) => {
  try {
    // Pega todas as tarefas
    const tasks = await prisma.task.findMany();

    // Valida se tem alguma tarefa
    if (tasks.length === 0) {
      return res.status(404).json({ msg: "Nenhuma tarefa encontrada." });
    }
    // Envia as tarefas
    res.json(tasks);
  } catch (error) {
    res.status(500).send("Erro ao buscar tarefas.");
  }
});

// Pega tarefa por id ou nome
// Atualiza uma tarefa
// Deleta uma tarefa

// Export
export default tasksRouter;
