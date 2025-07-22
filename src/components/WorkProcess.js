import { useState } from 'react';
import ConsultationModal from './ConsultationModal';

const WorkProcess = ({ onConsultationClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // const scrollToContact = () => {
  //   const contactSection = document.getElementById('contact');
  //   if (contactSection) {
  //     contactSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const steps = [
    {
      number: '01',
      title: 'Консультация',
      description: 'Обсуждаем ваши потребности и предпочтения, определяем бюджет и сроки проекта.'
    },
    {
      number: '02', 
      title: 'Замеры',
      description: 'Выезжаем на объект для точных замеров и оценки особенностей помещения.'
    },
    {
      number: '03',
      title: 'Дизайн-проект',
      description: 'Создаем детальный дизайн-проект с 3D визуализацией и спецификацией материалов.'
    },
    {
      number: '04',
      title: 'Производство',
      description: 'Изготавливаем мебель на собственном производстве с контролем качества на каждом этапе.'
    },
    {
      number: '05',
      title: 'Доставка',
      description: 'Осуществляем бережную доставку и профессиональную установку мебели.'
    },
    {
      number: '06',
      title: 'Сдача проекта',
      description: 'Проводим финальную приемку работ и предоставляем гарантийные обязательства.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Title and description */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">СХЕМА РАБОТЫ</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Наш отлаженный процесс работы гарантирует качественный результат 
                и соблюдение всех договоренностей. Каждый этап контролируется 
                нашими специалистами.
              </p>
            </div>

            {/* Right side - Process steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-800 border border-gray-600 rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-white group-hover:text-gray-900 transition-colors duration-300">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6">Готовы начать работу над вашим проектом?</p>
            <button 
              onClick={onConsultationClick || (() => setIsModalOpen(true))}
              aria-label="Получить консультацию"
              className="px-8 py-3 bg-[#e3ac70] rounded-lg text-white font-semibold hover:bg-gray-800 hover:text-white transition-colors duration-300"
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </div>

      {/* Модальное окно для консультации */}
      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Получить консультацию"
      />
    </section>
  );
};

export default WorkProcess;
