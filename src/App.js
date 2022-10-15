import "./App.css";
import { BusinessContext } from "./components/BusinessContext";
import { TasksList } from "./components/TasksList";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="main-content">
      <TasksList />
      <BusinessContext/>
      </main>
      <footer></footer>
     
    </div>
  );
}

export default App;
