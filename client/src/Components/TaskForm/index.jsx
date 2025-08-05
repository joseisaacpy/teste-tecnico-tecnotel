const TaksForm = () => {
  return (
    <>
      <section>
        <form>
          <div>
            {/* Título */}
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              required
              id="titulo"
              name="titulo"
              placeholder="Digite o título da tarefa"
            />
          </div>
          {/* Descricao */}
          <button type="submit">Adicionar</button>
        </form>
      </section>
    </>
  );
};

export default TaksForm;