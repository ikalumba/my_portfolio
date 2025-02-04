import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './index.css';
import StarryBackground from './components/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <StarryBackground/>
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
