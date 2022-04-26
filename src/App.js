import logo from './logo.svg';
import config from './config/';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          mode: {config.mode}
        </p>
      </header>
    </div>
  );
}

export default App;
