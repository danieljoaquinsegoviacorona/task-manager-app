import './App.css';
import AddTask from './components/wrapping-components/NewTask';
import TaskTable from './components/wrapping-components/TaskTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <h1>Add new task:</h1>
      <AddTask></AddTask>
      <h1>Tasks Table:</h1>
      <TaskTable></TaskTable>
    </div>
  );
}

export default App;
