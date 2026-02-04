import { Review, PortfolioItem, Lead } from './types';

export const COMPANY_INFO = {
  name: "ACJ Rénovation",
  phone: "01 39 58 15 74",
  address: "24 D rue Jean Mermoz, 78620 L'Étang-la-Ville",
  email: "contact@acj-renovation.fr",
  yearsExperience: 13,
  rating: 4.9,
  reviewCount: 5,
};

export const MOCK_REVIEWS: Review[] = [
  { id: 1, author: "M. Besançon", rating: 5, text: "Intervention rapide et travail soigné pour ma chaudière.", date: "Il y a 2 mois" },
  { id: 2, author: "Mme Dumas", rating: 5, text: "Rénovation de salle de bain magnifique. Merci à l'équipe.", date: "Il y a 3 mois" },
  { id: 3, author: "J. Olivier", rating: 4, text: "Très professionnel, je recommande pour la climatisation.", date: "Il y a 5 mois" },
  { id: 4, author: "P. Gérard", rating: 5, text: "Showroom très utile pour choisir ses matériaux.", date: "Il y a 6 mois" },
  { id: 5, author: "L. Raynor", rating: 5, text: "Dépannage d'urgence un samedi, sauvé des eaux !", date: "Il y a 1 an" },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, category: 'Climatisation', title: 'Installation PAC Air/Air', image: 'https://picsum.photos/800/600?random=1', description: 'Système réversible Daikin dans salon' },
  { id: 2, category: 'Chauffage', title: 'Chaudière Gaz Condensation', image: 'https://picsum.photos/800/600?random=2', description: 'Remplacement ancienne chaudière fioul' },
  { id: 3, category: 'Salle de bain', title: 'Rénovation Complète', image: 'https://picsum.photos/800/600?random=3', description: 'Douche à l\'italienne et carrelage' },
  { id: 4, category: 'Plomberie', title: 'Refonte Tuyauterie Cuivre', image: 'https://picsum.photos/800/600?random=4', description: 'Rénovation réseau eau potable' },
  { id: 5, category: 'Salle de bain', title: 'Installation Baignoire', image: 'https://picsum.photos/800/600?random=5', description: 'Baignoire îlot moderne' },
  { id: 6, category: 'Chauffage', title: 'Plancher Chauffant', image: 'https://picsum.photos/800/600?random=6', description: 'Pose avant coulage chape' },
];

export const MOCK_LEADS: Lead[] = [
  { id: 101, date: '2023-10-25', name: 'Jean Dupont', phone: '06 12 34 56 78', email: 'jean.d@email.com', service: 'Plomberie', urgency: 'Urgent', status: 'Nouveau', notes: 'Fuite sous évier' },
  { id: 102, date: '2023-10-24', name: 'Sophie Martin', phone: '06 98 76 54 32', email: 's.martin@email.com', service: 'Chauffage', urgency: 'Faible', status: 'Contacté', notes: 'Devis remplacement chaudière' },
  { id: 103, date: '2023-10-22', name: 'Marc Web', phone: '07 11 22 33 44', email: 'marc@web.com', service: 'Climatisation', urgency: 'Moyenne', status: 'Devis envoyé', budget: '3000-10000€' },
];