import { useState, useEffect } from 'react';

const ScrollToTopButton = ({ onConsultationClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Показываем/скрываем кнопку при прокрутке
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Плавная прокрутка наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Плавная прокрутка к форме
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed bottom-6 z-10 right-6 flex flex-col gap-3 transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Кнопка для перехода к форме */}
      <button
        onClick={onConsultationClick || scrollToContact}
        className="w-14 h-14 rounded-full bg-[#e3ac70] text-white flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors duration-300"
        aria-label="Связаться с нами"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-6 h-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
      
      {/* Кнопка для прокрутки наверх */}
      <button
        onClick={scrollToTop}
        className="w-14 h-14 rounded-full bg-gray-600 text-white flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors duration-300"
        aria-label="Вернуться наверх"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-6 h-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
