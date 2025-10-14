import React from 'react';
import { MOCK_PRODUCTS_DB } from '../api/mock-data';
import { Product as ProductType } from '../types';

interface ProductsProps {
  category: 'All' | 'Completed' | 'Ongoing' | 'Tools/Machines';
  title: string;
}

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  const categoryColor = {
    Completed: 'bg-green-100 text-green-800',
    Ongoing: 'bg-yellow-100 text-yellow-800',
    'Tools/Machines': 'bg-blue-100 text-blue-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
             <span className={`px-2 py-1 text-xs font-semibold rounded-full ${categoryColor[product.category]}`}>
                {product.category}
            </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <p className="text-xs text-gray-400">Last Updated: {product.updatedAt.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

const Products: React.FC<ProductsProps> = ({ category, title }) => {
  const products = category === 'All'
    ? MOCK_PRODUCTS_DB
    : MOCK_PRODUCTS_DB.filter(p => p.category === category);

  return (
    <div className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">Explore our range of high-precision products and machinery.</p>
        </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
                <ProductCard key={product.name} product={product} />
            ))}
            </div>
      </div>
    </div>
  );
};

export default Products;
