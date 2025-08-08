// Importa o prisma client
import prisma from "./lib/prismaClient.js";

async function main() {
  // Dados iniciais para popular a tabela Task
  const tasks = [
    {
      titulo: "Estudar Node.js",
      descricao: "Revisar conceitos básicos do Node.js e Express",
      concluida: false,
    },
    {
      titulo: "Comprar mantimentos",
      descricao: "Leite, pão, ovos e frutas",
      concluida: true,
    },
    {
      titulo: "Limpar a casa",
      descricao: null,
      concluida: false,
    },
    {
      titulo: "Passar no processo seletivo da Tecnotel",
      descricao: "Entrevista online às 15h",
      concluida: false,
    },
  ];

  // Inserir cada tarefa no banco de dados
  for (const task of tasks) {
    await prisma.task.create({
      data: task,
    });
  }

  console.log("Seed concluída: tarefas inseridas!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
