import './App.css';
import Header from "./Header"
import Headline from './Headline';

function tracking() {
 //Put the tracking code here
}

function App() {
  return (
    <div className="App">
        <Header />
        <Headline />
        <button
          className="App-link"
          onClick={tracking}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </button>
    </div>
  );
}

export default App;
