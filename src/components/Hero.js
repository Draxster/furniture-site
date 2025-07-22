import React from 'react';

const Hero = ({ onConsultationClick }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen bg-gray-900 flex items-center justify-center" role="banner">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/0 z-10"></div>
      
      {/* Background image placeholder - you can replace with actual image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
        {/* You can add background image here */}
        <img 
          src="assets/wallpaper.jpg"
          alt="Современная мебель для интерьера - кухни, шкафы, корпусная мебель на заказ"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="z-20 text-center text-white px-4">
        <h1 className="flex flex-col items-start text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="flex text-[#fbf3e5]">Центр</span>
          <span className="flex text-[#5b6060]">Мебельных</span>
          <span className="flex text-[#e3ac70]">Решений</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <div className="text-sm uppercase tracking-widest"> <span className='text-[#fbf3e5]'>Ц</span><span className='text-[#5b6060]'>М</span><span className='text-[#e3ac70]'>Р</span></div>
          <div className="w-px h-12 bg-white hidden md:block"></div>
          <div className="text-right text-sm text-white/80">
            Место ваше - Мебель наша
          </div>
        </div>
        
        <div className="mt-12">
          <button
            onClick={onConsultationClick || scrollToContact}
            className="px-8 py-4 text-white bg-[#e3ac70] hover:bg-gray-800 hover:text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg"
          >
            Получить консультацию
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
