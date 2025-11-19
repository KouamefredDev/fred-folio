import { Award, Users, Briefcase, Code } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Briefcase, value: '2+', label: 'Années d\'expérience' },
    { icon: Code, value: '10+', label: 'Technologies utilisées' },
    { icon: Users, value: '8+', label: 'Projets réalisés' },
    { icon: Award, value: '8+', label: 'Diplômes et Certifications' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">À Propos</h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Diplômé d'une Licence Professionnelle en Système Informatique et Génie Logiciel 
              de l'ESATIC (2022), je suis un développeur fullstack passionné avec une bonne base 
              dans les technologies web et mobile modernes.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Mon parcours combine développement technique, gestion de projet et leadership. 
              J'ai occupé diverses responsabilités allant de chef de projet académique à président 
              de département de jeunesse, développant ainsi mes compétences en gestion d'équipe et 
              communication.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Actuellement consultant informatique chez Winlogic, je travaille également sur des 
              projets de bénévolat incluant la digitalisation d'église et le conseil pour une clinique. 
              Mon objectif est de créer des solutions digitales performantes qui répondent aux besoins 
              réels des utilisateurs.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Mes valeurs</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-slate-900">Excellence technique</p>
                  <p className="text-slate-600">Code propre, maintenable et performant</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-slate-900">Apprentissage continu</p>
                  <p className="text-slate-600">Veille technologique et formation permanente</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-slate-900">Esprit d'équipe</p>
                  <p className="text-slate-600">Collaboration et communication transparente</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-slate-900">Engagement social</p>
                  <p className="text-slate-600">Contribution au développement de ma communauté</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border border-slate-200 text-center hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <IconComponent className="w-10 h-10 text-slate-700 mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}