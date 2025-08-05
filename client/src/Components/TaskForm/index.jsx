import { useState } from "react";
// Importando o toastify
import { toast, ToastContainer } from "react-toastify";

const TaksForm = ({ onTaskAdded }) => {
  // Estados para o formulário
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Valida se os campos foram preenchidos
    if (!titulo) {
      toast.error("Preencha o campo de título");
      return;
    }
    // Envia os dados para o backend
    const novaTask = {
      titulo,
      descricao,
    };
    try {
      await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novaTask),
      });
      // Exibe uma mensagem de sucesso
      toast.success("Tarefa adicionada com sucesso!");
      // Limpa os campos do formulário
      setTitulo("");
      setDescricao("");
      // Chamar callback para avisar que adicionou uma tarefa
      if (onTaskAdded) onTaskAdded();
    } catch (error) {
      // Exibe uma mensagem de erro
      toast.error("Erro ao adicionar tarefa.");
      console.error(error);
    }
  };

  return (
    <section>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
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
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
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
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer bg-slate-900 text-white p-2 rounded-[5px]"
        >
          Adicionar
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default TaksForm;
