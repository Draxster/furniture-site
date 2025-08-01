import { useState, useEffect, useCallback } from 'react';

const ProjectModal = ({ project, isOpen, onClose, onOrderClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Функции навигации с мемоизацией
  const nextImage = useCallback(() => {
    if (!project) return;
    setCurrentImageIndex((prev) => 
      prev === project.image.length - 1 ? 0 : prev + 1
    );
  }, [project]);

  const prevImage = useCallback(() => {
    if (!project) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.image.length - 1 : prev - 1
    );
  }, [project]);

  // Сбрасываем индекс при открытии модального окна
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  // Добавляем навигацию с клавиатуры
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen || !project) return;
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevImage();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextImage();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen, project, onClose, nextImage, prevImage]);
  
  if (!isOpen || !project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
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
          {/* Галерея изображений */}
          <div className="mb-6">
            {/* Основное изображение */}
            <div className="relative mb-4">
              <img 
                src={project.image[currentImageIndex]}
                alt={`Мебель на заказ: ${project.title} - ${project.description} #${currentImageIndex + 1}`}
                className="w-full h-64 object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
              
              {/* Навигационные стрелки */}
              {project.image.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    aria-label="Предыдущее изображение"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    aria-label="Следующее изображение"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              {/* Индикатор количества изображений */}
              {project.image.length > 1 && (
                <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  {currentImageIndex + 1} / {project.image.length}
                </div>
              )}
            </div>
            
            {/* Миниатюры */}
            {project.image.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {project.image.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden transition-all ${
                      index === currentImageIndex 
                        ? 'border-gray-900 opacity-100' 
                        : 'border-gray-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Миниатюра ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
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
              className="flex-1 px-6 py-3 bg-[#e3ac70] text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-semibold"
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
