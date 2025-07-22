import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  useEffect(() => {
    // Скролл вверх при загрузке страницы
    window.scrollTo(0, 0);
    
    // Обновляем заголовок страницы для SEO
    document.title = "О нас - Центр Мебельных Решений";
    
    // Обновляем meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'О компании Центр Мебельных Решений. История, производство, команда профессионалов. 6 лет на рынке, современное оборудование.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка страницы */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-10">
              О нас
            </h1>
            <p className="text-xl text-gray-300">
              Центр Мебельных Решений - ваш надежный партнер в создании уникальных интерьеров
            </p>
            
            {/* Навигационные крошки */}
            <nav className="mt-8" aria-label="Breadcrumb">
              <ol className="flex items-center justify-center space-x-2 text-sm">
                <li>
                  <Link 
                    to="/" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Главная
                  </Link>
                </li>
                <li className="text-gray-500">/</li>
                <li className="text-white">О нас</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Введение */}
            <div className="mb-16">
              <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Добро пожаловать в Центр Мебельных Решений!
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  С 2019 года наша компания специализируется на изготовлении эксклюзивной мебели на заказ. 
                  Мы превращаем ваши идеи в реальность, создавая функциональные и красивые решения для дома и офиса.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  За 6 лет работы мы реализовали более 120 проектов, заслужив доверие 500+ клиентов. 
                  Каждое изделие — это результат профессионального подхода и внимания к деталям.
                </p>
              </div>
            </div>

            {/* Наша история */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша история</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Компания была основана в 2019 году группой опытных мебельщиков, объединенных 
                      общей идеей — создавать качественную мебель, которая служит долгие годы.
                    </p>
                    <p>
                      Начав с небольшой мастерской, мы постепенно расширили производство, внедрили 
                      современные технологии и собрали команду настоящих профессионалов.
                    </p>
                    <p>
                      Сегодня ЦМР — это современное производство с полным циклом изготовления мебели, 
                      от дизайна до установки готового изделия.
                    </p>
                    Каждое изделие проходит строгий контроль качества перед отправкой.
                    <br />
                    Наша команда мастеров справляется с задачами любой сложности — от раскроя плит до создания декоративных элементов.
                    <br /><br />
                    Мы обслуживаем как физические, так и юридические лица, предлагая широкий ассортимент мебели.
                    <br /><br />
                    Вы можете рассчитывать на высокое качество и первоклассный сервис на всех этапах, независимо от объема заказа.
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="История компании - мебельная мастерская"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Начало нашего пути - 2019 год
                  </p>
                </div>
              </div>
            </div>

            {/* Производство и оборудование */}
            <div className="mb-16">
              <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Современное производство
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                  Наш производственный цех оснащен современным высокотехнологичным оборудованием, 
                  что позволяет создавать мебель высочайшего качества с точностью до миллиметра.
                </p>
                
                {/* Фотографии оборудования */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="relative group">
                    <img 
                      src="assets/CPU_stanok.webp"
                      alt="CNC станок для обработки дерева"
                      className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <p className="text-white font-semibold">CNC станок</p>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <img 
                      src="assets/stanok2.webp"
                      alt="Производственный цех мебельной фабрики"
                      className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <p className="text-white font-semibold">Производственный цех</p>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <img 
                      src="assets/kromka_stanok.webp"
                      alt="Покрасочная камера"
                      className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <p className="text-white font-semibold">Покрасочная камера</p>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <img 
                      src="assets/raspil_stanok.webp"
                      alt="Сборочный участок"
                      className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <p className="text-white font-semibold">Сборочный участок</p>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Контроль качества"
                      className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <p className="text-white font-semibold">Контроль качества</p>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Склад готовой продукции"
                      className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <p className="text-white font-semibold">Склад готовой продукции</p>
                    </div>
                  </div>
                </div>

                {/* Список оборудования */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Станочный парк</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• CNC обрабатывающие центры</li>
                      <li>• Форматно-раскроечные станки</li>
                      <li>• Кромкооблицовочные станки</li>
                      <li>• Фрезерные станки с ЧПУ</li>
                      <li>• Сверлильно-присадочные станки</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Дополнительное оборудование</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Покрасочные камеры</li>
                      <li>• Сушильные камеры</li>
                      <li>• Пневматические прессы</li>
                      <li>• Система пылеудаления</li>
                      <li>• Измерительное оборудование</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Наша команда */}
            <div className="mb-16">
              <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Наша команда
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                  Профессиональная команда из 10 специалистов с многолетним опытом работы в мебельной индустрии.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Дизайнеры</h3>
                    <p className="text-gray-600">3 специалиста с опытом более 8 лет</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Мастера-краснодеревщики</h3>
                    <p className="text-gray-600">5 мастеров высшей категории</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Сборщики</h3>
                    <p className="text-gray-600">2 сборщика с опытом монтажа любой сложности</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Статистика */}
            <div className="mb-16">
              <div className="bg-gray-900 text-white rounded-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Наши достижения</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-blue-400 mb-2">6</div>
                    <div className="text-gray-300">лет на рынке</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-400 mb-2">120+</div>
                    <div className="text-gray-300">проектов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                    <div className="text-gray-300">довольных клиентов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">24</div>
                    <div className="text-gray-300">месяца гарантии</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Наши ценности */}
            <div className="mb-16">
              <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Наши ценности
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Качество</h3>
                    <p className="text-gray-600">
                      Используем только проверенные материалы и строго контролируем каждый этап производства
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Соблюдение сроков</h3>
                    <p className="text-gray-600">
                      Четко планируем производство и всегда выполняем заказы в оговоренные сроки
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Индивидуальный подход</h3>
                    <p className="text-gray-600">
                      Каждый проект для нас уникален, учитываем все пожелания и особенности клиента
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Кнопка возврата */}
            <div className="text-center">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
