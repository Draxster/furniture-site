import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 text-white font-bold text-l">
            <div><img src='Logo.png' width={'74px'} height={'74px'} alt='Logo'></img></div>
            <div><span className="flex text-[#fbf3e5]">Ц <span className='text-white/80'>ентр</span> </span>
          <span className="flex text-[#5b6060]">М <span className='text-white/80'>ебельных</span></span>
          <span className="flex text-[#e3ac70]">Р <span className='text-white/80'>ешений</span></span>
            </div>
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="nav-link hover:text-white text-white/80 transition-colors">О нас</a>
            <a href="#projects" className="nav-link hover:text-white text-white/80 transition-colors">Проекты</a>
            <a href="#advantages" className="nav-link hover:text-white text-white/80 transition-colors">Преимущества</a>
            <a href="#faq" className="nav-link hover:text-white text-white/80 transition-colors">FAQ</a>
            <a href="#contact" className="nav-link hover:text-white text-white/80 transition-colors">Контакты</a>
          </nav>

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
              <a href="#about" className="text-white hover:text-gray-300 transition-colors py-2">О нас</a>
              <a href="#projects" className="text-white hover:text-gray-300 transition-colors py-2">Проекты</a>
              <a href="#advantages" className="text-white hover:text-gray-300 transition-colors py-2">Преимущества</a>
              <a href="#faq" className="text-white hover:text-gray-300 transition-colors py-2">FAQ</a>
              <a href="#contact" className="text-white hover:text-gray-300 transition-colors py-2">Контакты</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
