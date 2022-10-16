import "./App.css";
import { BusinessContext } from "./components/BusinessContext";
import { TasksList } from "./components/TasksList";
import { Routes, Route } from "react-router-dom";
import { tasks } from "./tasksData.js";
import { useState } from "react";

function App() {
  const [tasksState, setTasksState] = useState(tasks);

  const handleClickOnNewContext = (contextId) => {
    setTasksState((prevState) =>
      prevState.map((task) => {
        const newContexs = task.contexts.map((context) => {
          if (context.id === contextId) {
            const newEl = { ...context };
            newEl.context_status = "active";
            return newEl;
          } else return context;
        });
        const updatedTask = { ...task };
        updatedTask.contexts = newContexs;
        return updatedTask;
      })
    );
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<TasksList tasks={tasksState} />} />
          <Route
            path="/business-context/:id"
            element={
              <BusinessContext
                tasks={tasksState}
                clickOnNew={handleClickOnNewContext}
              />
            }
          />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
