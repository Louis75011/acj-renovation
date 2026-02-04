import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const ServiceSection = ({ id, title, items, description, image }: { id: string, title: string, items: string[], description: string, image: string }) => (
  <div id={id} className="py-16 border-b border-gray-100 last:border-0 scroll-mt-24">
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-heading font-bold text-primary mb-6">{title}</h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {description}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-dark">
              <span className="bg-secondary/10 text-secondary p-1 rounded-full shrink-0">
                <Check size={16} strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="inline-flex items-center text-secondary font-bold hover:text-primary transition-colors">
          Demander un devis pour {title} <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
      <div className="lg:w-1/2">
        <img src={image} alt={title} className="rounded-xl shadow-lg w-full h-[400px] object-cover" />
      </div>
    </div>
  </div>
);

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Nos Prestations</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Expertise technique et savoir-faire artisanal pour tous vos travaux de plomberie et chauffage.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <ServiceSection 
          id="plomberie"
          title="Plomberie & Sanitaire"
          description="De la recherche de fuite à la création de réseaux complets, nous intervenons avec rapidité et précision. Nos installations respectent les normes en vigueur pour garantir votre sécurité."
          items={[
            "Recherche et réparation de fuites",
            "Rénovation de salle de bain clé en main",
            "Installation de chauffe-eau",
            "Remplacement de robinetterie",
            "Modification de tuyauterie (cuivre, multicouche)",
            "Débouchage de canalisations"
          ]}
          image="https://picsum.photos/800/600?random=20"
        />

        <ServiceSection 
          id="chauffage"
          title="Chauffage Gaz"
          description="Optimisez votre confort thermique tout en réduisant votre facture énergétique. Nous sommes experts en chaudières à condensation et systèmes basse température."
          items={[
            "Installation chaudière gaz condensation",
            "Remplacement de radiateurs",
            "Pose de plancher chauffant",
            "Désembouage de circuit",
            "Entretien annuel obligatoire",
            "Contrat de maintenance"
          ]}
          image="https://picsum.photos/800/600?random=21"
        />

        <ServiceSection 
          id="pac-clim"
          title="Pompe à Chaleur & Climatisation"
          description="Passez aux énergies renouvelables. Nos solutions de pompes à chaleur et climatisations réversibles vous offrent un confort optimal été comme hiver."
          items={[
            "Pompe à chaleur Air/Air (Climatisation)",
            "Pompe à chaleur Air/Eau",
            "Systèmes réversibles Inverter",
            "Installation multi-split",
            "Mise en service certifiée",
            "Dépannage toutes marques"
          ]}
          image="https://picsum.photos/800/600?random=22"
        />
        
        <div className="py-16 text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">Besoin d'un dépannage urgent ?</h3>
            <p className="mb-6">Disponible le samedi sur rendez-vous.</p>
             <Link to="/contact" className="bg-accent text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-colors">
                Contactez le service urgence
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;