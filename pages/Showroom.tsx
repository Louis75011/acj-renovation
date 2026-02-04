import React from 'react';
import { MapPin, Clock, Phone, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { Link } from 'react-router-dom';

const Showroom = () => {
  return (
    <div className="bg-white">
      {/* Showroom Hero */}
      <div className="relative h-[400px]">
         <img 
            src="https://picsum.photos/1920/600?grayscale" 
            alt="Showroom ACJ" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70 flex items-center justify-center text-center">
            <div className="px-4">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Notre Showroom</h1>
              <p className="text-xl text-blue-100">24 D rue Jean Mermoz, L'Étang-la-Ville</p>
            </div>
          </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Info Side */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-neutral p-8 rounded-xl">
              <h3 className="text-2xl font-bold font-heading text-primary mb-6">Informations Pratiques</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-secondary shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="block font-bold text-dark">Adresse</span>
                    <span className="text-gray-600">{COMPANY_INFO.address}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-secondary shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <span className="block font-bold text-dark">Horaires</span>
                    <span className="text-gray-600">Lundi - Vendredi : 9h00 - 18h00</span>
                    <span className="block text-gray-600">Samedi : Sur rendez-vous</span>
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-secondary shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="block font-bold text-dark">Téléphone</span>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-primary">{COMPANY_INFO.phone}</a>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/contact" className="block w-full bg-primary text-white text-center py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors">
                  <span className="flex items-center justify-center gap-2"><Calendar size={18} /> Prendre Rendez-vous</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Map Content */}
          <div className="lg:w-2/3">
             <h2 className="text-3xl font-heading font-bold text-primary mb-6">Venez nous rencontrer</h2>
             <p className="text-gray-600 mb-8 text-lg">
                Notre showroom est l'endroit idéal pour définir votre projet. Vous pourrez y voir nos gammes de robinetterie, 
                nos modèles de chaudières dernière génération et nos unités de climatisation.
             </p>
             
             {/* Fake Map Implementation */}
             <div className="w-full h-[500px] bg-gray-200 rounded-xl overflow-hidden relative shadow-inner flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-gray-500 font-bold mb-2">Google Maps Integration</p>
                  <p className="text-sm text-gray-400">Map placeholder (API Key required in production)</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=24+D+rue+Jean+Mermoz+78620+Etang-la-Ville" 
                    target="_blank"
                    rel="noreferrer" 
                    className="inline-block mt-4 text-secondary underline hover:text-primary"
                  >
                    Ouvrir dans Google Maps
                  </a>
                </div>
                {/* In a real app, integrate the iframe here */}
                {/* <iframe src="..." className="absolute inset-0 w-full h-full" /> */}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Showroom;