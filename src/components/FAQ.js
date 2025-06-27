import React, { useState } from 'react';
import ConsultationModal from './ConsultationModal';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      question: "Как сделать заказ?",
      answer: (
        <ol className="list-decimal list-inside space-y-2">
          <li>Выберите товар и добавьте в корзину.</li>
          <li>Перейдите в корзину.</li>
          <li>Заполните данные для заказа.</li>
          <li>Подтвердите заказ, нажав на кнопку «Оформить». Менеджер свяжется с Вами для согласования заказа.</li>
        </ol>
      )
    },
    {
      question: "Сколько времени занимает изготовление мебели по индивидуальному проекту?",
      answer: "Изготовление мебели по индивидуальному проекту обычно занимает от 4 до 8 недель. Время может варьироваться в зависимости от сложности дизайна и загруженности производства."
    },
    {
      question: "От чего зависит стоимость заказа?",
      answer: "Стоимость заказа зависит от материалов, размеров, дизайна, фурнитуры, индивидуальных требований, сроков исполнения и услуг доставки."
    },
    {
      question: "Нужна помощь в выборе. К кому обратиться?",
      answer: (
        <span>
          Оставьте заявку на сайте{' '}
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-blue-600 hover:text-blue-800 underline cursor-pointer font-medium"
          >
            вот здесь
          </button>
          {' '}и наш менеджер по продажам свяжется с Вами.
        </span>
      )
    },
    {
      question: "С какими материалами Вы работаете?",
      answer: "Мы используем ЛДСП, ДСП, МДФ, фанеру и дерево."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Часто задаваемые вопросы
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ответы на популярные вопросы о наших услугах
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-lg font-medium text-gray-900">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    openItems[index] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <div className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно для заявки */}
      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Оставить заявку"
      />
    </section>
  );
};

export default FAQ;
