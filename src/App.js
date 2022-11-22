import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Supplements from "./components/Supplements/Supplements";
import TrainingPrograms from "./components/TrainingPrograms/TrainingPrograms";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <TrainingPrograms />
      {/* features */}
      {/* nutrition */}
      <Supplements />
      <Pricing />
      {/* call to action */}
      <Footer />
    </div>
  );
};

export default App;
