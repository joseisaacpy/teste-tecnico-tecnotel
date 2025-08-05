// Imports
import TaskForm from "../TaskForm";
import TaskList from "../TaskList";
import { useState } from "react";

const TaskPage = () => {
  // Estado usado como "gatilho" para atualizar a lista de tarefas.
  const [atualizar, setAtualizar] = useState(false);

  // Essa função será passada ao formulário
  const lidarComCadastro = () => {
    // Troca o valor para forçar atualização na lista
    setAtualizar((prev) => !prev);
  };

  return (
    <div>
      <TaskForm onTaskAdded={lidarComCadastro} />
      <TaskList atualizarTrigger={atualizar} />
    </div>
  );
};

export default TaskPage;
