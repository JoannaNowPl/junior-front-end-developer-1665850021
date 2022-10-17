import "./App.css";
import { BusinessContext } from "./components/BusinessContext";
import { TasksList } from "./components/TasksList";
import { Routes, Route } from "react-router-dom";
import { tasks } from "./tasksData.js";
import { useState } from "react";
import {Logo} from "./components/Logo.js";
import userImg from "./utils/userImg.svg";

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
      <header className="App__header">
       <div>{Logo}</div>
       <div>
        <img src={userImg} alt="User avatar" className="App__avatar"/>
       </div>
      </header>
      <main className="App__main-content">
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
      <footer className="App__footer">
        <div>
          <ul className="App__footer-section">
            <li className="App__footer-item App__footer-item--first">
              Terms of service
            </li>
            <li className="App__footer-item">
              Privacy policy
            </li>
            <li className="App__footer-item">
              Copyright
            </li>
          </ul>
        </div>
        <div>
          <ul className="App__footer-section">
            <li className="App__footer-item App__footer-item--first">
              nerds.family Vesion 1.2
            </li>
            <li className="App__footer-item">
              Last update 10/09/2022
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
