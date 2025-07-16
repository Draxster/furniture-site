import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorClick = (e, anchor) => {
    e.preventDefault();
    setIsMenuOpen(false); // Закрываем мобильное меню
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#/" className="flex gap-3 text-white font-bold text-l cursor-pointer">
            <div><img src='Logo.png' width={'74px'} height={'74px'} alt='Logo'></img>
            </div>
            <div>
              <span className="flex text-[#fbf3e5]">Центр</span>
              <span className="flex text-[#5b6060]">Мебельных</span>
              <span className="flex text-[#e3ac70]">Решений</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" onClick={(e) => handleAnchorClick(e, 'about')} className="nav-link hover:text-white text-white/80 transition-colors">О нас</a>
            <a href="#advantages" onClick={(e) => handleAnchorClick(e, 'advantages')} className="nav-link hover:text-white text-white/80 transition-colors">Преимущества</a>
            <a href="#projects" onClick={(e) => handleAnchorClick(e, 'projects')} className="nav-link hover:text-white text-white/80 transition-colors">Проекты</a>
            <a href="#faq" onClick={(e) => handleAnchorClick(e, 'faq')} className="nav-link hover:text-white text-white/80 transition-colors">FAQ</a>
            <a href="#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className="nav-link hover:text-white text-white/80 transition-colors">Заказать</a>
          </nav>

          {/* Social Media Links - скрыто на мобильных, показано на планшетах+ */}
          <div className='hidden lg:flex gap-4 items-center'>
            <div className='flex flex-col items-center justify-center'>
              <a href="tel:79936262020" className='text-white/80 hover:text-white text-sm'>+7(993)-626-20-20</a>
              <a href='mailto:info@blackfoam.ru' className='text-white/80 hover:text-white text-sm'>info@blackfoam.ru</a>
            </div>
            <a href="https://wa.me/79936262020" className='text-white/80 hover:text-white'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16"><path fill="currentColor" d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144l-2.494.654l.666-2.433l-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931a6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646c-.182-.065-.315-.099-.445.099c-.133.197-.513.646-.627.775c-.114.133-.232.148-.43.05c-.197-.1-.836-.308-1.592-.985c-.59-.525-.985-1.175-1.103-1.372c-.114-.198-.011-.304.088-.403c.087-.088.197-.232.296-.346c.1-.114.133-.198.198-.33c.065-.134.034-.248-.015-.347c-.05-.099-.445-1.076-.612-1.47c-.16-.389-.323-.335-.445-.34c-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992c.47.205.84.326 1.129.418c.475.152.904.129 1.246.08c.38-.058 1.171-.48 1.338-.943c.164-.464.164-.86.114-.943c-.049-.084-.182-.133-.38-.232"/></svg></a>
          </div>
          
          {/* WhatsApp кнопка для мобильных */}
          <div className='flex lg:hidden'>
            <a href="https://wa.me/79936262020" className='text-white/80 hover:text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144l-2.494.654l.666-2.433l-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931a6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646c-.182-.065-.315-.099-.445.099c-.133.197-.513.646-.627.775c-.114.133-.232.148-.43.05c-.197-.1-.836-.308-1.592-.985c-.59-.525-.985-1.175-1.103-1.372c-.114-.198-.011-.304.088-.403c.087-.088.197-.232.296-.346c.1-.114.133-.198.198-.33c.065-.134.034-.248-.015-.347c-.05-.099-.445-1.076-.612-1.47c-.16-.389-.323-.335-.445-.34c-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992c.47.205.84.326 1.129.418c.475.152.904.129 1.246.08c.38-.058 1.171-.48 1.338-.943c.164-.464.164-.86.114-.943c-.049-.084-.182-.133-.38-.232"/></svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#about" onClick={(e) => handleAnchorClick(e, 'about')} className="text-white hover:text-gray-300 transition-colors py-2">О нас</a>
              <a href="#projects" onClick={(e) => handleAnchorClick(e, 'projects')} className="text-white hover:text-gray-300 transition-colors py-2">Проекты</a>
              <a href="#advantages" onClick={(e) => handleAnchorClick(e, 'advantages')} className="text-white hover:text-gray-300 transition-colors py-2">Преимущества</a>
              <a href="#faq" onClick={(e) => handleAnchorClick(e, 'faq')} className="text-white hover:text-gray-300 transition-colors py-2">FAQ</a>
              <a href="#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className="text-white hover:text-gray-300 transition-colors py-2">Контакты</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
