import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    // Временно используем тестовые ключи - замените на ваши настоящие
    emailjs.init('IO2ZFU2KHvME6FwsV');
  }, []);

  // Load Yandex Map
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9b266dc5ab78a80ecfb6a1d930c20db3c56d27a6c08b3bbbcf150719ff0f396b&width=100%25&height=384&lang=ru_RU&scroll=true';
    
    const mapContainer = document.getElementById('yandex-map-container');
    if (mapContainer) {
      mapContainer.appendChild(script);
    }

    return () => {
      if (mapContainer && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Параметры для шаблона EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        reply_to: formData.email,
        email: 'farizrahmatov11@gmail.com' // Получатель
      };

      console.log('Отправляем данные:', templateParams);

      // Отправка email через emailjs.send
      const response = await emailjs.send(
        'service_ud26r67', // Ваш Service ID
        'template_0pv6bfn', // Ваш Template ID
        templateParams
      );

      console.log('Email отправлен успешно:', response);
      setSubmitStatus('success');
      
      // Очищаем форму
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('Ошибка отправки:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side - Contact info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">СВЯЗАТЬСЯ С НАМИ</h2>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом, 
                и мы предоставим профессиональную консультацию.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                    <p className="text-gray-600">Красногорск, Нахабино, улица Институтская дом 18, оф. РММ/1 ЭТ ПОМ 7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                    <p className="text-gray-600">+7(993)-626-20-20</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">raspil-raskroi@mail.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Время работы</h3>
                    <p className="text-gray-600">Пн-Пт: 9:00-18:00<br />Сб-Вс: по договоренности</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Оставить заявку</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  ></textarea>
                </div>

                {/* Скрытые поля для EmailJS */}
                <input type="hidden" name="email" value="farizrahmatov11@gmail.com" />
                <input type="hidden" name="reply_to" value={formData.email} />

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded mb-4">
                    Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded mb-4">
                    Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded font-semibold transition-colors duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Карта с нашим расположением */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Как нас найти
            </h3>
            <p className="text-gray-600">
              Посетите наш офис для личной консультации
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center md:grid-cols-3 gap-6">
                <div className="flex flex-1 items-center justify-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Адрес</p>
                    <p className="text-sm text-gray-600">Красногорск, Нахабино, улица Институтская дом 18, оф. РММ/1 ЭТ ПОМ 7</p>
                  </div>
                </div>
                
                <div className="flex flex-1 items-center justify-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Телефон</p>
                    <p className="text-sm text-gray-600">+7(993)-626-20-20</p>
                  </div>
                </div>
                
                <div className="flex flex-1 items-center justify-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Время работы</p>
                    <p className="text-sm text-gray-600">Пн-Пт: 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Яндекс Карта */}
            <div className="relative">
              <div 
                id="yandex-map-container" 
                className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden"
                style={{ minHeight: '384px' }}
              >
                {/* Карта загружается динамически через useEffect */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
