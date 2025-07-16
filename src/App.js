import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Materials from './components/Materials';
import Advantages from './components/Advantages';
import Projects from './components/Projects';
import WorkProcess from './components/WorkProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEOOptimizedFAQ from './components/SEOOptimizedFAQ';
import ScrollToTopButton from './components/ScrollToTopButton';
import ConsultationModal from './components/ConsultationModal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import AboutUs from './pages/AboutUs';

// Главная страница
const HomePage = ({ onConsultationClick }) => (
  <>
    <Hero onConsultationClick={onConsultationClick} />
    <About onConsultationClick={onConsultationClick} />
    <Advantages onConsultationClick={onConsultationClick} />
    <Projects onConsultationClick={onConsultationClick} />
    <Materials onConsultationClick={onConsultationClick} />
    <WorkProcess onConsultationClick={onConsultationClick} />
    <SEOOptimizedFAQ onConsultationClick={onConsultationClick} />
    <Contact />
  </>
);

function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const openConsultationModal = () => {
    setIsConsultationModalOpen(true);
  };

  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false);
  };

  return (
    <Router>
      <div className="App font-sans">
        <Header />
        <ScrollToTopButton onConsultationClick={openConsultationModal} />
        
        <Routes>
          <Route path="/" element={<HomePage onConsultationClick={openConsultationModal} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
        
        <Footer />
        
        {/* Модальное окно консультации */}
        <ConsultationModal 
          isOpen={isConsultationModalOpen} 
          onClose={closeConsultationModal} 
          title="Получить консультацию"
        />
      </div>
    </Router>
  );
}

export default App;
