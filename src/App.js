import './App.css';
import Counter from "./components/Counter";
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Counter App</h2>
        <Counter />
        <h2>Todos List</h2>
        <Todos />
      </header>
    </div>
  );
}

export default App;
