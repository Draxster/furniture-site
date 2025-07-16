// 1. Зарегистрируйтесь на https://www.emailjs.com/
// 2. Создайте новый Email Service (например, Gmail)
// 3. Создайте новый Email Template
// 4. Получите ваши ключи и замените значения ниже

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_ud26r67',
  TEMPLATE_ID: 'template_0pv6bfn',
  PUBLIC_KEY: 'IO2ZFU2KHvME6FwsV', 
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