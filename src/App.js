import "./App.css";
import { BusinessContext } from "./components/BusinessContext";
import { TasksList } from "./components/TasksList";
import { Routes, Route } from "react-router-dom";
import { tasks } from "./tasksData.js";
import { useState } from "react";

function App() {
  const [tasksState, setTasksState] = useState(tasks);

  const handleClickOnContext = (contextId, taskId) => {
    setTasksState((prevState) =>
      prevState.map((task) => {
        if (task.id === taskId) {
          const newContexs = task.contexts.map((context) => {
            if (context.context_status === "active")
              return { ...context, context_status: "read" };
            else if (context.id === contextId) {
              return { ...context, context_status: "active" };
            } else return context;
          });
          const updatedTask = { ...task };
          updatedTask.contexts = newContexs;
          return updatedTask;
        } else return task;
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
                clickOnNew={handleClickOnContext}
                clickOnRead={handleClickOnContext}
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
