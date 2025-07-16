import React from 'react';

const Advantages = ({ onConsultationClick }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const advantages = [
    {
      number: '01',
      title: 'Индивидуальный подход',
      description: 'Каждый проект уникален. Мы учитываем все ваши пожелания и особенности пространства.'
    },
    {
      number: '02', 
      title: 'Качественные материалы',
      description: 'Используем только проверенные материалы от ведущих производителей.'
    },
    {
      number: '03',
      title: 'Современные технологии',
      description: 'Применяем передовые технологии производства и обработки материалов.'
    },
    {
      number: '04',
      title: 'Гарантия качества',
      description: 'Предоставляем расширенную гарантию на все виды работ и материалы.'
    },
    {
      number: '05',
      title: 'Сроки выполнения',
      description: 'Соблюдаем оговоренные сроки и всегда укладываемся в установленные рамки.'
    },
    {
      number: '06',
      title: 'Сервисное обслуживание',
      description: 'Предоставляем полное сервисное обслуживание на всех этапах проекта.'
    }
  ];

  return (
    <section id="advantages" className="py-12 md:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 text-center">ПРЕИМУЩЕСТВА</h2>
          
          {/* Адаптивная сетка - упрощенная для мобильных */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="group p-4 md:p-8 border border-gray-700 hover:border-gray-500 transition-colors duration-300 rounded-lg"
              >
                <div className="flex items-center md:flex-col md:items-start">
                  <div className="text-2xl md:text-4xl font-bold text-gray-500 mr-4 md:mr-0 md:mb-4 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    {advantage.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-white">
                      {advantage.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Кнопка консультации */}
          <div className="mt-12 text-center">
            <button
              onClick={onConsultationClick || scrollToContact}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
