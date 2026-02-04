import React, { useState } from 'react';

const Calculator = () => {
  const [project, setProject] = useState('plomberie');
  const [size, setSize] = useState(1);
  const [quality, setQuality] = useState('standard');

  const calculateEstimate = () => {
    let base = 0;
    if (project === 'plomberie') base = 500;
    if (project === 'chauffage') base = 3000;
    if (project === 'clim') base = 2000;
    if (project === 'sdb') base = 5000;

    const multiplier = quality === 'premium' ? 1.5 : 1;
    const sizeFactor = size * (project === 'sdb' ? 1000 : 100); // Rough logic
    
    const min = Math.round(base + (sizeFactor * 0.8) * multiplier);
    const max = Math.round((base * 1.5) + (sizeFactor * 1.2) * multiplier);

    return `${min} € - ${max} €`;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold text-primary mb-4 font-heading">Estimez votre budget</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Type de projet</label>
          <select value={project} onChange={(e) => setProject(e.target.value)} className="w-full border-gray-300 rounded-md p-2 bg-gray-50">
            <option value="plomberie">Plomberie simple</option>
            <option value="chauffage">Remplacement Chaudière</option>
            <option value="clim">Installation Clim</option>
            <option value="sdb">Rénovation Salle de Bain</option>
          </select>
        </div>
        <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">
             {project === 'sdb' ? 'Surface (m²)' : 'Nombre d\'unités/radiateurs'}
           </label>
           <input 
             type="number" 
             min="1" 
             value={size} 
             onChange={(e) => setSize(parseInt(e.target.value) || 1)}
             className="w-full border-gray-300 rounded-md p-2 bg-gray-50"
            />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gamme</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="quality" value="standard" checked={quality === 'standard'} onChange={() => setQuality('standard')} className="mr-2" />
              Standard
            </label>
             <label className="flex items-center">
              <input type="radio" name="quality" value="premium" checked={quality === 'premium'} onChange={() => setQuality('premium')} className="mr-2" />
              Premium
            </label>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-secondary/10 rounded-lg text-center">
          <div className="text-sm text-gray-600">Estimation indicative</div>
          <div className="text-2xl font-bold text-primary">{calculateEstimate()}</div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;