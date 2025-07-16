import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex text-2xl font-bold mb-6">
                Место ваше -<br />
                Мебель наша
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
                  <a href='https://yandex.ru/maps/-/CHwjFI2-' className='hover:text-white'>Красногорск, Нахабино, улица Институтская дом 18, оф. РММ/1 ЭТ ПОМ 7</a>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Телефон:</p>
                  <a href='tel:79936262020' className='text-gray-400 hover:text-white'>+7(993)-626-20-20</a>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Email:</p>
                  <a href='mailto:info@blackfoam.ru' className='text-gray-400 hover:text-white'>info@blackfoam.ru</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2025 Центр мебельных решений. Все права защищены.
              </div>
              <div className="flex space-x-6">
                <Link 
                  to="/privacy-policy" 
                  className="text-gray-500 hover:text-white transition-colors duration-300 text-sm"
                >
                  Политика конфиденциальности
                </Link>
                <Link 
                  to="/terms-of-use" 
                  className="text-gray-500 hover:text-white transition-colors duration-300 text-sm"
                >
                  Условия использования
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
