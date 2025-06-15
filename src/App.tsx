import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;