import { Code2, Database, Cloud, Shield } from 'lucide-react';
export default function ApisServices() {
  const apisServices = [
    {
      category: 'Communication',
      icon: Cloud,
      services: [
        { name: 'Twilio', description: 'SMS' },
        { name: 'EmailJs', description: 'Envoi d\'emails' },
      ],
    },
    {
      category: 'Stockage Cloud',
      icon: Database,
      services: [
        { name: 'AWS S3', description: 'Stockage d\'objets et fichiers' },
      ],
    },
  ];
  return (
    <section id="apis-services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">APIs & Services Tiers</h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Services et APIs que j'ai intégrés dans mes projets
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {apisServices.map((group, index) => {
            const IconComponent = group.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{group.category}</h3>
                </div>
                <div className="space-y-4">
                  {group.services.map((service, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg border border-slate-200">
                      <p className="font-semibold text-slate-900 text-sm">{service.name}</p>
                      <p className="text-slate-600 text-xs mt-1">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}