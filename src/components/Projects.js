import { useState } from 'react';

// Вынесены данные в отдельный файл (data/projects.js)
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

const Projects = ({ onConsultationClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Получаем уникальные категории
  const categories = ['Все', ...new Set(projects.map(project => project.category))];

  // Фильтруем проекты по выбранной категории
  const filteredProjects = selectedCategory === 'Все' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setVisibleProjects(6); // Сбрасываем количество видимых проектов при смене категории
  };

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 6);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleOrderClick = () => {
    if (onConsultationClick) {
      onConsultationClick();
    } else {
      scrollToContact();
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-100" itemScope itemType="https://schema.org/ItemList">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок и фильтры */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-0">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Более 120 успешно реализованных проектов мебели на заказ для дома и офиса
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8 md:mt-0">
              {categories.map((category) => (
                <button 
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-gray-900 text-white border-gray-900' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Сетка проектов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, visibleProjects).map((project, index) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                itemScope 
                itemType="https://schema.org/CreativeWork"
                itemProp="itemListElement"
                onClick={() => handleProjectClick(project)}
              >
                {/* Изображение с lazy loading и fallback */}
                <div className="aspect-w-16 aspect-h-12 overflow-hidden relative">
                  <img 
                    src={project.image}
                    alt={`Мебель на заказ: ${project.title} - ${project.description}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    itemProp="image"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  
                  {/* Категория badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Overlay с информацией */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-lg font-semibold mb-2" itemProp="name">{project.title}</h4>
                    <p className="text-sm text-gray-200 mb-3 line-clamp-2" itemProp="description">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-300">
                      <span>📐 {project.area}</span>
                      <span>⏱️ {project.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 font-medium">{project.category}</span>
                    <div className="flex items-center gap-1">
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" itemProp="name">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2" itemProp="description">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Площадь: {project.area}</span>
                    <span>Срок: {project.duration}</span>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      <strong>Материалы:</strong> {project.materials}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Показать больше проектов */}
          {visibleProjects < filteredProjects.length && (
            <div className="text-center mt-12">
              <button 
                onClick={loadMoreProjects}
                className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                aria-label="Показать больше проектов"
              >
                Показать ещё ({filteredProjects.length - visibleProjects})
              </button>
            </div>
          )}

          {/* Статистика */}
          <div className="mt-16 bg-white rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">120+</div>
                <div className="text-sm text-gray-600">Проектов реализовано</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">6</div>
                <div className="text-sm text-gray-600">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">10</div>
                <div className="text-sm text-gray-600">Квалифицированных специалистов</div>
              </div>
            </div>
          </div>
          
          {/* Кнопка консультации */}
          <div className="mt-12 text-center">
            <button
              onClick={handleOrderClick}
              className="px-8 py-4 bg-[#e3ac70] text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg"
            >
              Получить консультацию по вашему проекту
            </button>
          </div>
        </div>
      </div>
      
      {/* Модальное окно проекта */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onOrderClick={handleOrderClick}
      />
    </section>
  );
};

export default Projects;
