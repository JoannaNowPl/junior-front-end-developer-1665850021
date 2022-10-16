import "./App.css";
import { BusinessContext } from "./components/BusinessContext";
import { TasksList } from "./components/TasksList";
import { Routes, Route } from "react-router-dom";
import {tasks} from "./tasksData.js"

function App() {

  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="main-content">      
        <Routes>
        <Route path="/" element={<TasksList tasks={tasks}/>} />
          <Route path="/business-context/:id" element={<BusinessContext tasks={tasks}/>} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
