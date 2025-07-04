// data/projects.js
/**
 * Массив проектов с данными
 */
export const projects = [
  {
    id: 1,
    title: 'Кухня "Элегант"',
    category: 'Кухни',
    description: 'Современная кухня с глянцевыми фасадами и встроенной техникой',
    materials: 'МДФ, ЛДСП, натуральный камень',
    area: '12 м²',
    duration: '14 дней',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Шкаф-купе "Модерн"',
    category: 'Шкафы',
    description: 'Встроенный шкаф-купе с зеркальными дверцами и LED-подсветкой',
    materials: 'ЛДСП, зеркало, алюминиевый профиль',
    area: '6 м²',
    duration: '7 дней',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Офисная мебель "Престиж"',
    category: 'Офисы',
    description: 'Комплект офисной мебели: рабочие столы, стеллажи, тумбы',
    materials: 'ЛДСП, металлические направляющие',
    area: '25 м²',
    duration: '10 дней',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Кухня "Классик"',
    category: 'Кухни',
    description: 'Классическая кухня из массива дуба с резными элементами',
    materials: 'Массив дуба, МДФ, натуральный камень',
    area: '15 м²',
    duration: '18 дней',
    image: 'https://images.unsplash.com/photo-1556909048-f32bd7b5e8f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Детская комната "Радуга"',
    category: 'Детские',
    description: 'Многофункциональная детская мебель с игровой зоной',
    materials: 'МДФ, ЛДСП, экологичные краски',
    area: '10 м²',
    duration: '12 дней',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Гардеробная "Люкс"',
    category: 'Гардеробные',
    description: 'Просторная гардеробная с системой хранения и зеркалами',
    materials: 'ЛДСП, алюминиевые системы, зеркало',
    area: '8 м²',
    duration: '9 дней',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    title: 'Прихожая "Комфорт"',
    category: 'Прихожие',
    description: 'Компактная прихожая с местом для обуви и верхней одежды',
    materials: 'ЛДСП, МДФ, металлические крючки',
    area: '4 м²',
    duration: '5 дней',
    image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    title: 'Кухня-студия "Минимализм"',
    category: 'Кухни',
    description: 'Открытая кухня-студия в минималистичном стиле',
    materials: 'МДФ, искусственный камень, сталь',
    area: '18 м²',
    duration: '16 дней',
    image: 'https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 9,
    title: 'Библиотека "Академия"',
    category: 'Библиотеки',
    description: 'Домашняя библиотека с встроенными стеллажами до потолка',
    materials: 'Массив дуба, МДФ, стекло',
    area: '12 м²',
    duration: '14 дней',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

/**
 * Словарь категорий для отображения человекочитаемых названий
 */
export const projectCategories = {
  kitchens: 'Кухни',
  offices: 'Офисы',
  bedrooms: 'Спальни'
};

/**
 * Вспомогательная функция для фильтрации проектов по категории
 * @param {string} categoryKey - ключ категории из `projectCategories`
 * @returns {Array} отфильтрованный массив проектов
 */
export function filterProjectsByCategory(categoryKey) {
  return projects.filter(project => project.category === categoryKey);
}
