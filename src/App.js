import logo from './logo.svg';
import './App.css';

const consola = require('consola');

function App() {
  const onClick = () => {
    consola.info("Ok, hai cliccato qui");
  }
  const today = new Date();
  const date = today.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={onClick}>Clicca qui</button>
        </header>
        <main>
        <h1>My First React</h1>
        </main>
        <footer>Copyright by Me {date}</footer>
    </div>
  );
}

export default App;
