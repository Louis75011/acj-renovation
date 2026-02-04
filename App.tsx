import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Facebook, Instagram, MessageCircle, LogIn } from 'lucide-react';
import { COMPANY_INFO } from './constants';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import Portfolio from './pages/Portfolio';
import Showroom from './pages/Showroom';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Prestations', path: '/services' },
    { name: 'Réalisations', path: '/portfolio' },
    { name: 'Showroom', path: '/showroom' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-xs md:text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><MapPin size={14} /> {COMPANY_INFO.address}</span>
            <span className="flex items-center gap-2 font-bold"><Phone size={14} /> {COMPANY_INFO.phone}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Intervention 78 et alentours</span>
            <Link to="/admin" className="flex items-center gap-1 opacity-50 hover:opacity-100"><LogIn size={12} /> Pro</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-bold text-primary flex items-center">
          <span className="bg-secondary text-white p-1 rounded mr-2">ACJ</span> Rénovation
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-dark">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`hover:text-secondary transition-colors ${location.pathname === link.path ? 'text-secondary font-bold' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="bg-secondary text-white p-2 rounded-full">
            <Phone size={20} />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg py-4 flex flex-col space-y-4 px-6 z-50">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="text-lg font-medium text-dark border-b pb-2 border-gray-100">
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="bg-primary text-white text-center py-3 rounded-lg font-bold">
              Appeler Maintenant
            </a>
            <Link to="/contact" className="bg-secondary text-white text-center py-3 rounded-lg font-bold">
              Demander un Devis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold font-heading mb-4">ACJ Rénovation</h3>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            Expert en plomberie, chauffage et climatisation depuis 2013.
            Interventions rapides et soignées à L'Étang-la-Ville, Saint-Germain-en-Laye et dans tout le 78.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-secondary"><Facebook /></a>
            <a href="#" className="hover:text-secondary"><Instagram /></a>
            <a href="#" className="hover:text-secondary"><MessageCircle /></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold font-heading mb-4">Nos Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/services" className="hover:text-secondary">Plomberie Générale</Link></li>
            <li><Link to="/services" className="hover:text-secondary">Chauffage & Chaudières</Link></li>
            <li><Link to="/services" className="hover:text-secondary">Pompes à Chaleur</Link></li>
            <li><Link to="/services" className="hover:text-secondary">Climatisation Réversible</Link></li>
            <li><Link to="/services" className="hover:text-secondary">Rénovation Salle de Bain</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold font-heading mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-secondary shrink-0" />
              <span>{COMPANY_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-secondary shrink-0" />
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="font-bold text-white text-lg">{COMPANY_INFO.phone}</a>
            </li>
            <li className="text-xs text-gray-400 mt-4">
              Lundi - Vendredi : 8h - 19h<br/>
              Samedi : Sur rendez-vous
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-blue-800 text-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} ACJ Rénovation. Tous droits réservés. Mentions Légales | Politique de Confidentialité</p>
      </div>
    </footer>
  );
};

const FloatingCta = () => {
  return (
    <a 
      href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
      className="md:hidden sticky-mobile-cta bg-accent text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      aria-label="Appeler maintenant"
    >
      <Phone size={24} fill="currentColor" />
    </a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-dark">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/showroom" element={<Showroom />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCta />
      </div>
    </Router>
  );
}