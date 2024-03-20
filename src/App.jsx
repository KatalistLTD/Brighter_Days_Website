import Hero from "./components/Hero";
import "./App.css";
import Form from "./components/Form";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";

function App() {
  return (
    <>
      {" "}
      <div className="App">
        <Hero />
        <AboutUs />
        <Services />
        <Form />
      </div>
    </>
  );
}

export default App;
