import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';
import Calculator from '../components/Calculator';
import { COMPANY_INFO } from '../constants';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zip: '',
    service: 'Plomberie',
    urgency: 'Pas urgent',
    description: '',
    budget: '',
    showroom: 'non',
    gdpr: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate Zip Code (Simple check for 78 or nearby)
    if (!formData.zip.startsWith('78') && !formData.zip.startsWith('92')) {
      alert("Note : Nous intervenons principalement dans le 78. Nous traiterons votre demande mais des frais de déplacement peuvent s'appliquer.");
    }
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-neutral flex items-center justify-center p-4">
        <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-lg">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Demande Envoyée !</h2>
          <p className="text-gray-600 mb-8">
            Merci {formData.name}. Votre demande a bien été prise en compte. 
            Notre équipe vous recontactera sous 24h.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-8">
            <p className="font-bold text-primary mb-2">Une urgence ?</p>
            <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-xl font-bold text-accent hover:underline">
              {COMPANY_INFO.phone}
            </a>
          </div>
          <button onClick={() => setSubmitted(false)} className="text-gray-500 hover:text-dark underline">
            Retour au formulaire
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-center text-primary mb-4">Contact & Devis</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Détaillez votre projet ci-dessous. Pour les dépannages urgents, privilégiez l'appel téléphonique.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              
              {/* Section 1: Coordonnées */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4 border-b pb-2">Vos Coordonnées</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom Complet *</label>
                    <input required name="name" type="text" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-secondary focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input required name="email" type="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-secondary focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                    <input required name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-secondary focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Code Postal *</label>
                    <input required name="zip" type="text" maxLength={5} value={formData.zip} onChange={handleChange} className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-secondary focus:outline-none" />
                  </div>
                </div>
              </div>

              {/* Section 2: Projet */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4 border-b pb-2">Votre Projet</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type de prestation</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full border border-gray-300 rounded p-3">
                      <option>Plomberie</option>
                      <option>Chauffage</option>
                      <option>Pompe à chaleur</option>
                      <option>Climatisation</option>
                      <option>Rénovation Salle de bain</option>
                      <option>Dépannage urgent</option>
                      <option>Entretien</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Urgence</label>
                    <div className="flex flex-wrap gap-2">
                       {['Sous 24h', 'Sous 48h', 'Pas urgent'].map(opt => (
                         <label key={opt} className={`cursor-pointer px-4 py-2 rounded border ${formData.urgency === opt ? 'bg-secondary text-white border-secondary' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                           <input type="radio" name="urgency" value={opt} checked={formData.urgency === opt} onChange={handleChange} className="hidden" />
                           {opt}
                         </label>
                       ))}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description du besoin</label>
                  <textarea name="description" rows={4} value={formData.description} onChange={handleChange} className="w-full border border-gray-300 rounded p-3" placeholder="Détaillez votre problème ou votre projet..."></textarea>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Photos (Optionnel)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <Upload className="mx-auto text-gray-400 mb-2" />
                    <span className="text-sm text-gray-500">Cliquez pour ajouter des photos (Max 3)</span>
                  </div>
                </div>
              </div>

              {/* Footer Form */}
              <div className="flex items-start gap-3 mb-6">
                <input required type="checkbox" name="gdpr" id="gdpr" className="mt-1" />
                <label htmlFor="gdpr" className="text-sm text-gray-600">J'accepte que mes données soient utilisées pour traiter ma demande. Consultez notre politique de confidentialité.</label>
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg">
                Envoyer ma demande
              </button>

            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            <Calculator />
            
            <div className="bg-primary text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold font-heading mb-4 flex items-center gap-2">
                <AlertCircle /> Info Urgences
              </h3>
              <p className="mb-4 text-blue-100">
                Pour toute fuite d'eau importante ou panne de chauffage totale en hiver, n'utilisez pas ce formulaire.
              </p>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="block bg-white text-primary text-center font-bold py-3 rounded hover:bg-gray-100 transition-colors">
                Appeler le {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;