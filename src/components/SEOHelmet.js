import { useEffect } from 'react';

const SEOHelmet = ({ 
  title = "Центр Мебельных Решений - Мебель на заказ | Кухни, Шкафы, Корпусная мебель",
  description = "Изготовление эксклюзивной мебели на заказ в Москве. Кухни, шкафы-купе, корпусная мебель. 6 лет опыта, 120+ проектов. Бесплатный замер и консультация.",
  keywords = "мебель на заказ москва, кухни на заказ, шкафы купе, корпусная мебель, мебель для дома, мебель для офиса, дизайн интерьера",
  canonical = window.location.href
}) => {
  useEffect(() => {
    // Обновляем title
    document.title = title;
    
    // Обновляем meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Обновляем meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Обновляем canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }
    
    // Добавляем Open Graph теги
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonical);
    
  }, [title, description, keywords, canonical]);
  
  return null;
};

export default SEOHelmet;
