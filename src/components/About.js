import React from 'react';
import { Link } from 'react-router-dom';

const About = ({ onConsultationClick }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-900 text-white" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 pt-10">О компании</h2>
          
          <div className="mb-16">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Наша компания предлагает полный спектр услуг по изготовлению мебели, создавая уникальные и функциональные решения с 2019 года.
              <br /><br />

              Мы гордимся высоким качеством продукции, используя только лучшие материалы и современное оборудование, а также работая с ведущими дизайнерами Москвы.
              <br /><br />

              

              

              Если Вам нужна мебель для дома, офиса или коммерческого проекта, мы готовы помочь.
              <br />
              
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Каждый проект для нас — это возможность создать что-то особенное, 
              что будет радовать вас долгие годы.
            </p>
            
            {/* Кнопки */}
            <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                Подробнее о нас
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <button
                onClick={onConsultationClick || scrollToContact}
                className="inline-flex items-center px-8 py-3 bg-[#e3ac70] text-white hover:bg-gray-800 font-semibold rounded-lg transition-colors duration-300"
              >
                Получить консультацию
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
