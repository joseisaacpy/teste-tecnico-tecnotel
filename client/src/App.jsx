import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import { useEffect } from "react";
function App() {
  // Usa o useEffect para mudar nome do title
  useEffect(() => {
    document.title = "Sistema de Tarefas";
  });
  return (
    <>
      {/* Container */}
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-slate-900 p-2 flex justify-center items-center w-full">
          <h1 className="text-3xl text-white font-bold">Sistema de Tarefas</h1>
        </header>
        {/* Main */}
        <main className="flex-1 p-4">
          <TaskForm />
          <TaskList />
        </main>
        {/* Footer */}
        <footer className="bg-slate-900 p-2 w-full">
          <p className="text-white text-center">
            Desenvolvido por{" "}
            <a href="https://github.com/joseisaacpy">José Isaac</a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
