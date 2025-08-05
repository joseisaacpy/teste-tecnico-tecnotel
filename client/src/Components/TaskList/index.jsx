import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import Modal from "../Modal";

const TaskList = ({ atualizarTrigger }) => {
  // Estado para controlar o modal de editar tarefas
  const [modalAberto, setModalAberto] = useState(false);

  // Estado para controlar a tarefa a ser editada
  const [tarefaParaEditar, setTarefaParaEditar] = useState(null);
  const [tituloEdicao, setTituloEdicao] = useState("");
  const [descricaoEdicao, setDescricaoEdicao] = useState("");

  const abrirModalEdicao = (tarefa) => {
    setTarefaParaEditar(tarefa);
    setTituloEdicao(tarefa.titulo);
    setDescricaoEdicao(tarefa.descricao || "");
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setTarefaParaEditar(null);
  };

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
  const atualizarTarefa = async () => {
    try {
      await fetch(`http://localhost:3000/tasks/${tarefaParaEditar.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: tituloEdicao,
          descricao: descricaoEdicao,
        }),
      });

      toast.success("Tarefa atualizada com sucesso!");
      buscarTarefas();
      fecharModal();
    } catch (error) {
      toast.error("Erro ao atualizar tarefa.");
      console.error(error);
    }
  };

  // Usa o useEffect para buscar as tarefas ao montar o componente
  useEffect(() => {
    buscarTarefas();
  }, [atualizarTrigger]);

  return (
    <>
      {modalAberto && (
        <Modal onClose={fecharModal}>
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              atualizarTarefa();
            }}
          >
            {/* Título */}
            <div className="flex flex-col gap-2">
              <label htmlFor="titulo">Título</label>
              <input
                type="text"
                required
                id="titulo"
                name="titulo"
                placeholder="Digite o título da tarefa"
                className="border p-2 rounded-[5px]"
                value={tituloEdicao}
                onChange={(e) => setTituloEdicao(e.target.value)}
              />
            </div>
            {/* Descricao */}
            <div className="flex flex-col gap-2">
              <label htmlFor="descricao">Descrição</label>
              <input
                type="text"
                id="descricao"
                name="descricao"
                placeholder="Digite a descrição da tarefa"
                className="border p-2 rounded-[5px]"
                value={descricaoEdicao}
                onChange={(e) => setDescricaoEdicao(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer bg-slate-900 text-white p-2 rounded-[5px]"
            >
              Atualizar
            </button>
          </form>
        </Modal>
      )}

      <section className="flex flex-col">
        {/* Input de busca */}
        <h1 className="text-left font-semibold my-2">
          Quantidade de tarefas: {tarefas.length}
        </h1>
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
                  className="flex flex-col gap-1 border rounded-[5px] p-2 bg-slate-400"
                >
                  <h2
                    className={`font-bold ${
                      tarefa.concluida ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {tarefa.titulo}
                  </h2>

                  <p className="text-sm">
                    {tarefa.descricao || "Sem descrição"}
                  </p>
                  <div className="flex justify-between">
                    <div>
                      <p>{tarefa.concluida ? "Concluída" : "Pendente"}</p>
                    </div>
                    <div className="flex gap-1">
                      <button
                        className="cursor-pointer p-1 rounded-[5px] bg-slate-800 text-white transition-all"
                        onClick={() => {
                          abrirModalEdicao(tarefa);
                        }}
                      >
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
    </>
  );
};

export default TaskList;
