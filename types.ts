import React from 'react';

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
}

export interface Lead {
  id: number;
  date: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  urgency: 'Faible' | 'Moyenne' | 'Urgent' | 'Très Urgent';
  status: 'Nouveau' | 'Contacté' | 'Devis envoyé' | 'Gagné' | 'Perdu';
  budget?: string;
  notes?: string;
}

export interface PortfolioItem {
  id: number;
  category: 'Plomberie' | 'Chauffage' | 'Climatisation' | 'Salle de bain';
  title: string;
  image: string;
  description: string;
}