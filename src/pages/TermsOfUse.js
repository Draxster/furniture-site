import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  useEffect(() => {
    // Скролл вверх при загрузке страницы
    window.scrollTo(0, 0);

    // Обновляем заголовок страницы для SEO
    document.title = "Условия использования - Центр Мебельных Решений";

    // Обновляем meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Условия использования сайта Центр Мебельных Решений. Правила и условия использования ресурса.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка страницы */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-10">
              Условия использования
            </h1>
            <p className="text-xl text-gray-300">
              Правила и условия использования ресурса
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
                <li className="text-white">Условия использования</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">

              {/* Дата последнего обновления */}
              <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Дата последнего обновления:</strong> 8 июля 2025 года
                </p>
              </div>

              {/* Основной текст */}
              <div className="prose prose-lg max-w-none">

                <div className="mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Эти условия использования определяют правила использования сайта и
                    предоставленных сервисов. Они применяются ко всем пользователям сайта.
                  </p>
                </div>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
                    Общие положения
                  </h2>

                  <div className="space-y-4 text-gray-700">
                    <p>
                      Настоящие Условия использования (далее — "Условия") регулируют использование веб-сайта 
                      Центра Мебельных Решений, доступного по адресу <a href="https://blackfoam.ru/" className='underline'>https://blackfoam.ru/</a> (далее — "Сайт").
                    </p>
                    <p>
                      Используя Сайт, вы соглашаетесь соблюдать эти Условия и все применимые законы и правила. 
                      Если вы не согласны с любой частью этих Условий, пожалуйста, не используйте Сайт.
                    </p>
                    <p>
                      Мы оставляем за собой право изменять эти Условия в любое время без предварительного уведомления.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
                    Интеллектуальная собственность
                  </h2>

                  <div className="space-y-4 text-gray-700">
                    <p>
                      Все материалы, размещенные на Сайте, включая, но не ограничиваясь текстом, графикой, 
                      фотографиями, дизайном, логотипами, являются собственностью ООО "Центр Мебельных Решений" 
                      или используются на лицензионной основе.
                    </p>
                    <p>
                      Использование любых материалов Сайта в коммерческих целях без письменного разрешения 
                      владельца копирава строго запрещено.
                    </p>
                    <p>
                      Пользователям разрешается просматривать и скачивать контент исключительно для личного некоммерческого использования.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
                    Описание услуг
                  </h2>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">
                      Наши услуги включают:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Изготовление мебели на заказ</li>
                      <li>Дизайн и проектирование мебели</li>
                      <li>Консультации по выбору материалов</li>
                      <li>Доставка и сборка мебели</li>
                      <li>Послепродажное обслуживание</li>
                    </ul>
                  </div>

                  <div className="space-y-4 text-gray-700">
                    <p>
                      Мы оставляем за собой право изменять состав услуг, а также приостанавливать или 
                      прекращать предоставление любых услуг без предварительного уведомления.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
                    Правила поведения пользователей
                  </h2>

                  <div className="space-y-4 text-gray-700">
                    <p>Пользователям запрещается:</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-4 border-l-4 border-red-500 bg-red-50">
                      <h4 className="font-semibold text-red-800 mb-2">Недопустимые действия:</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Нарушать функциональность сайта</li>
                        <li>• Проводить атаки любого рода</li>
                        <li>• Использовать вредоносное ПО</li>
                        <li>• Пытаться получить неавторизованный доступ</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
                      <h4 className="font-semibold text-yellow-800 mb-2">Ограничения контента:</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Оскорбительные комментарии</li>
                        <li>• Незаконный контент</li>
                        <li>• Нарушение прав других лиц</li>
                        <li>• Спам и нежелательная реклама</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
                    Ограничение ответственности
                  </h2>

                  <div className="space-y-4 text-gray-700">
                    <p>
                      Владелец сайта не несет ответственности за использование информации,
                      размещенной на сайте, и не гарантирует, что предоставленные услуги будут
                      соответствовать требованиям пользователя.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
                    Изменения условий
                  </h2>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <p className="text-gray-700">
                      Мы имеем право по своему усмотрению обновлять эти условия использования в любое время.
                      Рекомендуется регулярно проверять данную страницу на предмет изменений.
                    </p>
                  </div>
                </section>

              </div>

              {/* Контактная информация */}
              <section className="mb-12">
                <div className="bg-gray-100 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Контактная информация
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Если у вас есть вопросы относительно данных условий использования, вы можете связаться с нами:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> info@blackfoam.ru</p>
                    <p><strong>Телефон:</strong> +7 (993) 626-20-20</p>
                  </div>
                </div>
              </section>

              {/* Кнопка возврата */}
              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
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
    </div>
  );
};

export default TermsOfUse;

