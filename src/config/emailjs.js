// EmailJS Configuration
// Для настройки EmailJS выполните следующие шаги:

// 1. Зарегистрируйтесь на https://www.emailjs.com/
// 2. Создайте новый Email Service (например, Gmail)
// 3. Создайте новый Email Template
// 4. Получите ваши ключи и замените значения ниже

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_ud26r67', // Замените на ваш Service ID
  TEMPLATE_ID: 'template_0pv6bfn', // Замените на ваш Template ID  
  PUBLIC_KEY: 'IO2ZFU2KHvME6FwsV', // Замените на ваш Public Key
};

// Пример шаблона для EmailJS:
// Тема: Новая заявка с сайта мебельной компании
// Тело письма:
/*
Получена новая заявка с сайта:

Имя: {{from_name}}
Email: {{from_email}}
Телефон: {{phone}}
Сообщение: {{message}}

Отправлено: {{reply_to}}
*/

// После настройки EmailJS импортируйте эту конфигурацию в Contact.js:
// import { EMAILJS_CONFIG } from '../config/emailjs';
