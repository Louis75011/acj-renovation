import React, { useState } from 'react';
import { MOCK_LEADS } from '../constants';
import { Lead } from '../types';
import { Search, Filter, Phone, Mail, FileText, Check, Trash } from 'lucide-react';

const AdminDashboard = () => {
  const [leads, setLeads] = useState<Lead[]>(MOCK_LEADS);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Nouveau': return 'bg-blue-100 text-blue-800';
      case 'Urgent': return 'bg-red-100 text-red-800';
      case 'Gagné': return 'bg-green-100 text-green-800';
      case 'Perdu': return 'bg-gray-100 text-gray-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const updateStatus = (id: number, newStatus: any) => {
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
  };

  const deleteLead = (id: number) => {
    if(window.confirm('Supprimer cette demande ?')) {
      setLeads(leads.filter(l => l.id !== id));
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-dark font-heading">Tableau de Bord - ACJ CRM</h1>
            <p className="text-gray-500">Gérez vos demandes et interventions</p>
          </div>
          <div className="bg-white px-4 py-2 rounded shadow text-sm">
            <span className="font-bold text-primary">{leads.length}</span> demandes totales
          </div>
        </header>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Rechercher un client..." 
              className="pl-10 pr-4 py-2 border rounded-lg w-full focus:ring-2 focus:ring-secondary focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto">
             {['All', 'Nouveau', 'Contacté', 'Devis envoyé', 'Gagné'].map(status => (
               <button 
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${statusFilter === status ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
               >
                 {status}
               </button>
             ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider">
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold">Client</th>
                  <th className="p-4 font-semibold">Service / Urgence</th>
                  <th className="p-4 font-semibold">Statut</th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredLeads.map(lead => (
                  <tr key={lead.id} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 text-sm text-gray-500">{lead.date}</td>
                    <td className="p-4">
                      <div className="font-bold text-dark">{lead.name}</div>
                      <div className="text-xs text-gray-400 flex flex-col gap-1 mt-1">
                        <span className="flex items-center gap-1"><Phone size={10} /> {lead.phone}</span>
                        <span className="flex items-center gap-1"><Mail size={10} /> {lead.email}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-medium">{lead.service}</div>
                      {lead.urgency === 'Urgent' && (
                        <span className="inline-block mt-1 text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded">URGENT</span>
                      )}
                      {lead.notes && <div className="text-xs text-gray-500 mt-1 italic max-w-xs truncate">{lead.notes}</div>}
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button title="Marquer Gagné" onClick={() => updateStatus(lead.id, 'Gagné')} className="p-2 bg-green-50 text-green-600 rounded hover:bg-green-100">
                          <Check size={16} />
                        </button>
                        <button title="Archiver/Supprimer" onClick={() => deleteLead(lead.id)} className="p-2 bg-red-50 text-red-600 rounded hover:bg-red-100">
                          <Trash size={16} />
                        </button>
                        <button title="Voir détails" className="p-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100">
                          <FileText size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredLeads.length === 0 && (
            <div className="p-8 text-center text-gray-500">Aucune demande trouvée.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;