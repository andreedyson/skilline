
import About from "./components/About";
import Benefits from "./components/Benefits";
import Features from "./components/Features/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Integrations from "./components/Integrations";
import Navbar from "./components/Navbar";
import News from "./components/News/News";
import Testmonials from "./components/Testmonials/Testmonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <About />
      <Features />
      <Integrations />
      <Testmonials />
      <News />
      <Footer />
    </>
  )
}

export default App;
