import React, { useState } from 'react';

const SEOOptimizedFAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "Сколько времени занимает изготовление мебели по индивидуальному проекту?",
      answer: "Изготовление мебели по индивидуальному проекту обычно занимает от 4 до 8 недель. Время может варьироваться в зависимости от сложности дизайна и загруженности производства."
    },
    {
      question: "Нужна помощь в выборе. К кому обратиться?",
      answer: "Оставьте заявку на сайте чуть ниже, в разделе 'Связаться с нами' и наш менеджер свяжется с Вами."
    },
    {
      question: "В каких районах Москвы работаете?",
      answer: "Мы работаем по всей Москве и Московской области. Выезд дизайнера на замер в пределах МКАД бесплатный. За МКАД стоимость выезда рассчитывается индивидуально."
    },
    {
      question: "Можно ли заказать дизайн-проект мебели?",
      answer: "Да, наши дизайнеры создают индивидуальные проекты мебели с учетом ваших пожеланий и особенностей помещения. Стоимость дизайн-проекта засчитывается при заказе изготовления."
    },
    {
      question: "Какие материалы вы используете?",
      answer: "Мы работаем с качественными материалами: ЛДСП, МДФ, натуральное дерево, фанера. Используем только экологически чистые материалы с сертификатами качества от ведущих производителей."
    }
  ];

  // Структурированные данные для FAQ
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 bg-white">
      {/* Добавляем структурированные данные */}
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о заказе мебели. 
              Не нашли ответ? Свяжитесь с нами для консультации.
            </p>
          </div>

          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {faqData.map((item, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
              >
                <button
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItems[index] || false}
                >
                  <h3 
                    className="text-lg font-semibold text-gray-900 pr-4"
                    itemProp="name"
                  >
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        openItems[index] ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openItems[index] && (
                  <div 
                    className="px-6 py-4 border-t border-gray-100 bg-gray-50"
                    itemScope 
                    itemProp="acceptedAnswer" 
                    itemType="https://schema.org/Answer"
                  >
                    <p 
                      className="text-gray-700 leading-relaxed"
                      itemProp="text"
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Остались вопросы? Мы с радостью ответим на них!
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Задать вопрос
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOOptimizedFAQ;
