import React from 'react';

const Advantages = () => {
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
    <section id="advantages" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">ПРЕИМУЩЕСТВА</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="group p-8 border border-gray-700 hover:border-gray-500 transition-colors duration-300"
              >
                <div className="text-4xl font-bold text-gray-500 mb-4 group-hover:text-white transition-colors duration-300">
                  {advantage.number}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {advantage.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
