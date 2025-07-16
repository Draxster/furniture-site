import React from 'react';

const ProjectModal = ({ project, isOpen, onClose, onOrderClick }) => {
  if (!isOpen || !project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Заголовок модального окна */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Содержимое модального окна */}
        <div className="p-6">
          {/* Изображение */}
          <div className="mb-6">
            <img 
              src={project.image}
              alt={`Мебель на заказ: ${project.title} - ${project.description}`}
              className="w-full h-64 object-cover rounded-lg"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
              }}
            />
          </div>

          {/* Информация о проекте */}
          <div className="space-y-4">
            <div>
              <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Описание проекта</h4>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Площадь</h4>
                <p className="text-gray-600">{project.area}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Срок выполнения</h4>
                <p className="text-gray-600">{project.duration}</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">Материалы</h4>
              <p className="text-gray-600">{project.materials}</p>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              Закрыть
            </button>
            <button
              onClick={() => {
                onOrderClick();
                onClose();
              }}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              Заказать похожий проект
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
