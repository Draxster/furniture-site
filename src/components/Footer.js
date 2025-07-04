import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold mb-6">
                МЕСТО ВАШЕ<br />
                МЕБЕЛЬ НАША
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Центр мебельных решений — ваш надежный партнер в создании 
                уникальных интерьеров. Индивидуальный подход к каждому проекту.
              </p>
              <div className="text-sm text-gray-500">
                ЦМР — Центр мебельных решений
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Навигация</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Проекты
                  </a>
                </li>
                <li>
                  <a href="#advantages" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Преимущества
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Контакты</h3>
              <div className="space-y-3 text-gray-400">
                <div>
                  <p className="font-medium text-white mb-1">Адрес:</p>
                  <p>Красногорск, Нахабино, улица Институтская дом 18, оф. РММ/1 ЭТ ПОМ 7</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Телефон:</p>
                  <p>+7(993)-626-20-20</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Email:</p>
                  <p>info@blackfoam.ru</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2024 Центр мебельных решений. Все права защищены.
              </div>
              <div className="flex space-x-6">
                <button className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">
                  Политика конфиденциальности
                </button>
                <button className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">
                  Условия использования
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
