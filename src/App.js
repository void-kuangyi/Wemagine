import About from "./About";
import "./App.css";
import Header from "./Header";
import Headline from "./Headline";
import Plan from "./Plan";

function tracking() {
  //Put the tracking code here
}

function App() {
  return (
    <div className="App">
      <Header />
      <Headline />
      <Plan />
      <About />
    </div>
  );
}

export default App;
