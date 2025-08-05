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
tasksRouter.get("/:id", async (req, res) => {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: req.params.id,
      },
    });
    if (!task) {
      return res.status(404).json({ msg: "Tarefa não encontrada." });
    }
    res.json({
      message: "Tarefa encontrada.",
      task,
    });
  } catch (error) {
    res.status(500).send("Erro ao buscar tarefa.");
  }
});

// Atualiza uma tarefa

// Deleta uma tarefa pelo id
tasksRouter.delete("/:id", async (req, res) => {
  try {
    const task = await prisma.task.delete({
      where: {
        id: req.params.id,
      },
    });

    if (!task) {
      return res.status(404).json({ msg: "Tarefa não encontrada." });
    }

    res.json({
      message: "Tarefa deletada com sucesso.",
      task,
    });
  } catch (error) {
    res.status(500).json({ msg: "Erro ao deletar tarefa." });
  }
});

// Export
export default tasksRouter;
