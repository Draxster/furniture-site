const Materials = () => {
  const materials = [
    {
      name: 'ЛДСП',
      image: 'assets/materials/ldsp.jpeg', // Исправленный путь к изображению ЛДСП
      description: 'Ламинированная древесно-стружечная плита'
    },
    {
      name: 'ДСП',
      image: 'assets/materials/dsp.jpg', // Путь к изображению ДСП
      description: 'Древесно-стружечная плита'
    },
    {
      name: 'МДФ',
      image: 'assets/materials/mdf.jpg', // Путь к изображению МДФ
      description: 'Древесноволокнистая плита средней плотности'
    },
    {
      name: 'Фанера',
      image: 'assets/materials/fanera.jpg', // Путь к изображению фанеры
      description: 'Многослойный листовой материал'
    },
    {
      name: 'Дерево',
      image: 'assets/materials/tree.jpg', // Исправленный путь к изображению дерева
      description: 'Натуральная древесина'
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Материалы</h2>
          
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            Мы работаем только с качественными материалами от проверенных поставщиков.
            Каждый материал подбирается индивидуально под ваш проект.
          </p>

          {/* Materials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {materials.map((material, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                {/* Image placeholder */}
                <div className="aspect-square bg-gray-200 relative overflow-hidden">
                  <img 
                    src={material.image} 
                    alt={`${material.name} - ${material.description} для изготовления мебели на заказ`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback если изображение не найдено
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 hidden items-center justify-center">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs text-gray-500">Фото материала</p>
                    </div>
                  </div>
                </div>
                
                {/* Material info */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-center mb-1">
                    {material.name}
                  </h3>
                  <p className="text-xs text-gray-500 text-center">
                    {material.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">
              Все материалы сертифицированы и соответствуют международным стандартам качества
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
