import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Wrench, Droplet, Thermometer, ArrowRight, Star } from 'lucide-react';
import { COMPANY_INFO, MOCK_REVIEWS } from '../constants';

const ServiceCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <Link to="/services" className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-transparent hover:border-secondary transition-all group">
    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold font-heading mb-2 text-primary">{title}</h3>
    <p className="text-gray-600 text-sm mb-4">{desc}</p>
    <div className="flex items-center text-secondary font-semibold text-sm">
      En savoir plus <ArrowRight size={16} className="ml-1" />
    </div>
  </Link>
);

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Atelier plomberie" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-block bg-secondary px-3 py-1 rounded text-xs font-bold mb-4 uppercase tracking-wider">
              Depuis 2013 à L'Étang-la-Ville
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Votre expert Plomberie, Chauffage & Climatisation
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              Installation, dépannage et rénovation dans les Yvelines. 
              Visitez notre showroom et profitez de nos 13 ans d'expérience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-secondary hover:bg-teal-500 text-white font-bold py-4 px-8 rounded-lg text-center transition-colors shadow-lg">
                Prendre Rendez-vous
              </Link>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-center transition-colors shadow-lg flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Appeler le {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="text-primary mb-2" size={32} />
              <span className="font-bold text-dark">13 ans d'expérience</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="text-primary mb-2" size={32} />
              <span className="font-bold text-dark">Showroom 78620</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex text-yellow-400 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="font-bold text-dark">Avis Google 4.9/5</span>
            </div>
            <div className="flex flex-col items-center">
              <Wrench className="text-primary mb-2" size={32} />
              <span className="font-bold text-dark">Intervention Rapide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-primary mb-4">Nos Domaines d'Intervention</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Des solutions complètes pour votre confort thermique et sanitaire, installées par des professionnels qualifiés RGE.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Droplet} 
              title="Plomberie" 
              desc="Recherche de fuites, robinetterie, dépannage et rénovation complète."
            />
            <ServiceCard 
              icon={Thermometer} 
              title="Chauffage" 
              desc="Chaudières gaz, basse température, radiateurs et planchers chauffants."
            />
            <ServiceCard 
              icon={Wrench} 
              title="Pompe à Chaleur" 
              desc="Solutions écologiques Air/Air et Air/Eau pour réduire vos factures."
            />
            <ServiceCard 
              icon={Thermometer} 
              title="Climatisation" 
              desc="Installation et entretien de climatisations réversibles toutes marques."
            />
          </div>
        </div>
      </section>

      {/* Showroom Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/800/600?random=10" alt="Showroom ACJ" className="w-full h-auto transform hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
                <p className="font-bold text-primary flex items-center gap-2"><MapPin size={16} /> L'Étang-la-Ville</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold font-heading text-primary mb-6">Visitez notre Showroom</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Pour mieux vous projeter, venez découvrir nos solutions de chauffage, climatisation et équipements sanitaires en conditions réelles. 
              Notre équipe vous accueille pour un conseil personnalisé.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-dark">
                <span className="bg-green-100 text-green-600 p-1 rounded-full"><ArrowRight size={14} /></span>
                Découverte des produits
              </li>
              <li className="flex items-center gap-3 text-dark">
                <span className="bg-green-100 text-green-600 p-1 rounded-full"><ArrowRight size={14} /></span>
                Conseils techniques gratuits
              </li>
              <li className="flex items-center gap-3 text-dark">
                <span className="bg-green-100 text-green-600 p-1 rounded-full"><ArrowRight size={14} /></span>
                Échantillons de matériaux
              </li>
            </ul>
            <Link to="/showroom" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-900 transition-colors">
              Voir le plan d'accès
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-primary text-center mb-12">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_REVIEWS.slice(0, 3).map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex text-yellow-400 mb-4">
                   {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-primary">{review.author}</span>
                  <span className="text-gray-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://google.com" target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline">Voir tous les avis sur Google</a>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold font-heading mb-4">Un projet ? Une urgence ?</h2>
          <p className="mb-8 text-xl opacity-90">Nos artisans interviennent sous 48h dans tout le 78.</p>
          <Link to="/contact" className="inline-block bg-white text-accent hover:bg-gray-100 font-bold py-4 px-10 rounded-lg shadow-lg transition-colors">
            Demander mon devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;