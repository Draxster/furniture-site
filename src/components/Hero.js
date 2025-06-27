import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen bg-gray-900 flex items-center justify-center" role="banner">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Background image placeholder - you can replace with actual image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
        {/* You can add background image here */}
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Современная мебель для интерьера - кухни, шкафы, корпусная мебель на заказ"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="block">МЕСТО ВАШЕ</span>
          <span className="block">МЕБЕЛЬ НАША</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <div className="text-sm uppercase tracking-widest">ЦМР</div>
          <div className="w-px h-12 bg-white hidden md:block"></div>
          <div className="text-right text-sm">
            Центр мебельных решений
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
