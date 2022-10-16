import "./App.css";
import { BusinessContext } from "./components/BusinessContext";
import { TasksList } from "./components/TasksList";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="main-content">
        <Routes>
         <Route path="/" element={<TasksList/>}/>
         <Route path="/business-context" element={<BusinessContext/>}/>
        </Routes>      
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
