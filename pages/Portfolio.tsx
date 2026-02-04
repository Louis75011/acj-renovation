import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { X } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('Tous');
  const [selectedImage, setSelectedImage] = useState<null | string>(null);

  const categories = ['Tous', 'Plomberie', 'Chauffage', 'Climatisation', 'Salle de bain'];

  const filteredItems = filter === 'Tous' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <div className="bg-neutral min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-center text-primary mb-8">Nos Réalisations</h1>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat 
                  ? 'bg-secondary text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-all"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white border border-white px-4 py-2 rounded uppercase text-sm tracking-wider">Agrandir</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">{item.category}</div>
                <h3 className="text-xl font-bold font-heading text-primary mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white p-2">
            <X size={32} />
          </button>
          <img src={selectedImage} alt="Full screen" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default Portfolio;