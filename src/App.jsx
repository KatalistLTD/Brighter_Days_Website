import Hero from "./components/Hero";
import Join from "./components/Join";
import Plan from "./components/Plan";
import Programs from "./components/Programs";
import Reasons from "./components/Reasons";
import "./App.css";

function App() {
  return (
    <>
      {" "}
      <div className="App">
        <Hero />
        <Programs />
        <Reasons />
        <Plan />
        <Join />
      </div>
    </>
  );
}

export default App;
