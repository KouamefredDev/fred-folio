import { useState } from 'react';
import { Check, Package, Zap, Code, Settings, BookOpen, Briefcase, Clock, Users, Eye } from 'lucide-react';

export default function Prestations() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const prestations = [
    {
      id: 1,
      category: 'web',
      title: 'Site Web Vitrine',
      description: 'Site statique vitrine pour présenter votre entreprise',
      icon: Eye,
      price: '100,000',
      currency: 'FCFA',
      features: ['Design responsive', 'Optimisé SEO', '5-8 pages', 'Formulaire contact'],
      duration: '2-3 semaines'
    },
    {
      id: 2,
      category: 'web',
      title: 'Site Web Dynamique',
      description: 'Application web complète avec base de données et panel admin',
      icon: Zap,
      price: '300,000',
      currency: 'FCFA',
      features: ['Base de données', 'Panel administrateur', 'Responsive Design'],
      duration: '4-12 semaines'
    },
    {
      id: 3,
      category: 'mobile',
      title: 'Application Mobile',
      description: 'Application native pour iOS et Android avec synchronisation cloud',
      icon: Package,
      price: '500,000',
      currency: 'FCFA',
      features: ['iOS & Android', 'UI/UX moderne', 'Notifications push', 'Support technique'],
      duration: '8-12 semaines'
    },
    {
      id: 4,
      category: 'support',
      title: 'Installation OS & Logiciels',
      description: 'Installation d\'un système d\'exploitation et logiciels configurés',
      icon: Settings,
      price: '15,000',
      currency: 'FCFA',
      features: ['Windows/Linux', 'Configuration réseau'],
      duration: '1-2 jours'
    },
    {
      id: 5,
      category: 'conseil',
      title: 'Analyse des Besoins',
      description: 'Audit complet et rédaction du cahier de charges',
      icon: Briefcase,
      price: '100,000',
      currency: 'FCFA',
      features: ['Diagnostic complet', 'Documentation', 'Recommandations'],
      duration: '3-7 jours'
    },
    {
      id: 6,
      category: 'formation',
      title: 'Formation en Informatique',
      description: 'Formations personnalisées en bureautique, utilisation de l\'intelligence artificielle et autres',
      icon: BookOpen,
      price: '100,000',
      currency: 'FCFA',
      features: ['Théorie & pratique', 'Projets réels'],
      duration: 'À définir'
    },
    {
      id: 7,
      category: 'conseil',
      title: 'Conseil en Informatique',
      description: 'Consultations pour l\'optimisation de votre infrastructure IT',
      icon: Code,
      price: '50,000',
      currency: 'FCFA/séance',
      features: ['Audit technique', 'Optimisation', 'Plan d\'action'],
      duration: 'Par séance'
    },
    {
      id: 8,
      category: 'engagement',
      title: 'Mode Freelance',
      description: 'Disponibilité pour des missions ponctuelles et projets spécifiques',
      icon: Clock,
      price: '15,000',
      currency: 'FCFA/heure',
      features: ['Facturation horaire', 'Flexibilité', 'Délais rapides'],
      duration: 'Variable'
    },
    {
      id: 9,
      category: 'engagement',
      title: 'Temps Plein',
      description: 'Engagement en CDI/CDD pour votre équipe de développement',
      icon: Users,
      price: '500,000',
      currency: 'FCFA/mois',
      features: ['40h/semaine', 'Intégration équipe', 'Évolution continue'],
      duration: 'À négocier'
    },
    {
      id: 10,
      category: 'engagement',
      title: 'Suivi de Projet',
      description: 'Gestion complète d\'un projet du début à la fin',
      icon: Check,
      price: '200,000',
      currency: 'FCFA',
      features: ['Planification', 'Rapports réguliers', 'Qualité assurance'],
      duration: 'Selon projet'
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'support', label: 'Support' },
    { id: 'conseil', label: 'Conseil' },
    { id: 'formation', label: 'Formation' },
    { id: 'engagement', label: 'Engagement' }
  ];

  const filtered = selectedCategory === 'all' 
    ? prestations 
    : prestations.filter(p => p.category === selectedCategory);

  return (
    <section id="prestations" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header similaire à Hero */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-4">
            Mes Prestations
          </h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto rounded-full mb-6"></div>
          <p className="text-xl sm:text-2xl text-slate-600 mb-6 max-w-3xl">
            Une gamme complète de services adaptés à tous les besoins
          </p>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            Du développement web et mobile à la formation et au conseil en informatique.
            Trouvez la prestation qui répond à vos besoins.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-slate-800 text-white shadow-lg hover:shadow-xl hover:scale-105'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille de prestations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filtered.map(prestation => {
            const IconComponent = prestation.icon;
            return (
              <div
                key={prestation.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200 group"
              >
                {/* Header coloré */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs font-bold bg-white/10 px-3 py-1 rounded-full">
                      {prestation.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{prestation.title}</h3>
                  <p className="text-slate-300 text-sm mt-2">{prestation.description}</p>
                </div>

                {/* Corps */}
                <div className="p-6">
                  {/* Prix */}
                  <div className="mb-6 pb-6 border-b border-slate-200">
                    <div className="text-3xl font-bold text-slate-900">
                      {prestation.price}
                      <span className="text-sm text-slate-600 font-normal ml-1">{prestation.currency}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {prestation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section comme dans Hero */}
        <div className="flex flex-col items-center text-center">
          <div className="max-w-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Besoin d'une prestation personnalisée ?
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Contactez-moi pour discuter de vos besoins spécifiques. 
              Je peux vous proposer une solution sur mesure adaptée à votre projet.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/fred-folio/#contact" className="px-8 py-4 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-900 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                Formulaire de contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}