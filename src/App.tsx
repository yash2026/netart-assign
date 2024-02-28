import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Pumps from "./components/Pumps/Pumps";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Pumps />
      <Footer />
    </div>
  );
}

export default App;
