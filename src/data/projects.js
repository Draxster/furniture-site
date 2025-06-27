// data/projects.js
/**
 * Массив проектов с данными
 */
export const projects = [
  {
    id: 1,
    title: 'Современная кухня',
    category: 'Кухни', // Используем уникальные ключи вместо строк
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Офисное пространство',
    category: 'Офисы',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Спальня в стиле минимализм',
    category: 'Спальни',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
