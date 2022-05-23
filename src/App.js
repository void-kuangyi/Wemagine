import logo from './logo.svg';
import './App.css';
function tracking() {
 //Put the tracking code here
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello, this is wemagine
        </p>
        <button
          className="App-link"
          onClick={tracking}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
