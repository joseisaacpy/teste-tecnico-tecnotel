import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";

const TaskList = () => {
  // Estado para armazenar as tarefas
  const [tarefas, setTarefas] = useState([]);
  // Função para buscar tarefas no banco
  const buscarTarefas = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      setTarefas(data);
    } catch (error) {
      console.error(error);
    }
  };
  // Função para deletar tarefa
  const deletarTarefa = async (id) => {
    try {
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });
      buscarTarefas();
      toast.success("Tarefa deletada com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao deletar tarefa.");
    }
  };
  // Função para dar check na tarefa
  const checkTarefa = async (id) => {
    try {
      const tarefaEncontrada = tarefas.find((tarefa) => {
        return tarefa.id === id;
      });
      if (!tarefaEncontrada) return;
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          concluida: !tarefaEncontrada.concluida,
        }),
      });
      buscarTarefas();
      toast.success("Tarefa editada com sucesso!", { autoClose: 500 });
    } catch (error) {
      console.error(error);
      toast.error("Erro ao editar tarefa.");
    }
  };
  // Função para editar tarefa no formulário
  
  // Usa o useEffect para buscar as tarefas ao montar o componente
  useEffect(() => {
    buscarTarefas();
  });
  return (
    <section className="flex flex-col">
      {/* Input de busca */}
      <input
        type="text"
        placeholder="Buscar tarefa"
        className="w-full p-2 border rounded-[5px] my-2"
      />
      {/* Lista de tarefas com Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-2">
        {/* Renderiza as tarefas */}
        {tarefas.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            Nenhuma tarefa cadastrada.
          </p>
        ) : (
          tarefas.map((tarefa) => {
            return (
              <div
                key={tarefa.id}
                className="flex flex-col gap-1 border rounded-[5px] p-2"
              >
                <h2 className="font-bold">{tarefa.titulo}</h2>
                <p className="text-sm">{tarefa.descricao || "Sem descrição"}</p>
                <div className="flex justify-between">
                  <div>
                    <p>{tarefa.concluida ? "Concluida" : "Pendente"}</p>
                  </div>
                  <div className="flex gap-1">
                    <button className="cursor-pointer p-1 rounded-[5px] bg-slate-800 text-white transition-all">
                      <FaEdit />
                    </button>
                    <button
                      className="cursor-pointer p-1 rounded-[5px] bg-slate-800 text-white transition-all"
                      onClick={() => deletarTarefa(tarefa.id)}
                    >
                      <FaTrash />
                    </button>
                    <button
                      className="cursor-pointer p-1 rounded-[5px] bg-slate-800 text-white transition-all"
                      onClick={() => checkTarefa(tarefa.id)}
                    >
                      <FaCheck />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <ToastContainer />
    </section>
  );
};

export default TaskList;
