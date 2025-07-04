import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Materials from './components/Materials';
import Advantages from './components/Advantages';
import Projects from './components/Projects';
import WorkProcess from './components/WorkProcess';
// import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEOOptimizedFAQ from './components/SEOOptimizedFAQ';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="App font-sans">
      <Header />
      <ScrollToTopButton />
      <Hero />
      <About />
      <Materials />
      <Advantages />
      <Projects />
      <WorkProcess />
      <SEOOptimizedFAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
