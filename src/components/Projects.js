import React from 'react';

// Вынесены данные в отдельный файл (data/projects.ts)
import { projects } from '../data/projects';


const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок и фильтры */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-0">ПРОЕКТЫ</h2>
            <div className="flex gap-4">
              <button className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition-colors duration-300">
                Все проекты
              </button>
              <button className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition-colors duration-300">
                Кухни
              </button>
              <button className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition-colors duration-300">
                Офисы
              </button>
            </div>
          </div>

          {/* Сетка проектов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Изображение с lazy loading и fallback */}
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={`Проект: ${project.title} (${project.category})`} // Описательный alt
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy" // Оптимизация загрузки
                    decoding="async" // Быстрая декодировка
                    onError={(e) => e.currentTarget.src = '/fallback-image.jpg'} // Обработка ошибок
                  />
                </div>
                
                {/* Overlay с кнопкой "Подробнее" */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900">
                      Подробнее
                    </button>
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Кнопка "Смотреть все проекты" */}
          <div className="text-center mt-12">
            <button 
              className="px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
              aria-label="Показать больше проектов"
            >
              Смотреть все проекты
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
