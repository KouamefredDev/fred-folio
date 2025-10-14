import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Support Technique & Formateur',
      company: 'Winlogic - Katiola, Côte d\'Ivoire',
      period: 'Janvier 2025 - Aujourd\'hui',
      description: 'Support technique et formateur sur le logiciel DPI (Dossier Patient Informatisé) pour les agents de santé. Gestion de l\'infrastructure serveur et maintenance applicative.',
      achievements: [
        'Formation des agents de santé sur l\'utilisation du logiciel DPI',
        'Remontée et suivi des besoins utilisateurs et anomalies du logiciel',
        'Mise à jour du logiciel sur serveur local et gestion des backups réguliers',
        'Support technique de niveau 1 et 2 pour les utilisateurs',
      ],
      tags: ['DPI', 'Support Technique', 'Formation', 'Serveur Local', 'Backup'],
    },
    {
      title: 'Développeur Fullstack (Bénévolat)',
      company: 'Projet de Digitalisation d\'Église - Katiola, Côte d\'Ivoire',
      period: '2024 - Aujourd\'hui',
      description: 'Conception et développement d\'une plateforme complète de gestion pour église incluant événements, finances et communication.',
      achievements: [
        'Architecture et développement de l\'application web et mobile',
        'Mise en place de la base de données et API REST',
        'Gestion de projet et coordination avec les parties prenantes',
      ],
      tags: ['Laravel', 'Flutter', 'MySQL'],
    },
    {
      title: 'Consultant & Chef de Projet Digital (Bénévolat)',
      company: 'Clinique - Treichville, Abidjan, Côte d\'Ivoire',
      period: 'Octobre 2024 - Aujourd\'hui',
      description: 'Conseil en solutions informatiques et gestion d\'un projet de digitalisation web et mobile. Management de l\'équipe digitale et développement fullstack.',
      achievements: [
        'Mise en place d\'un système de gestion de document partagé avec Google Sheets',
        'Gestion et coordination de l\'équipe digitale du projet',
        'Développement fullstack (web et mobile) de la solution de digitalisation',
        'Déploiement et gestion du serveur de production',
        'Conseil technique et formation du personnel de la clinique',
      ],
      tags: ['Chef de Projet', 'Fullstack', 'Management', 'DevOps', 'Conseil'],
    },
    {
      title: 'Développeur Fullstack Junior',
      company: 'Tinitz - Cocody, Abidjan, Côte d\'Ivoire',
      period: 'Mars 2023 - Août 2024',
      description: 'Stage de perfectionnement puis emploi en développement d\'applications web et mobile pour divers clients.',
      achievements: [
        'Développement de multiples projets web avec Laravel',
        'Création d\'interfaces mobiles avec Flutter',
        'Création d\'API REST',
        'Maintenance et évolution de projets existants',
      ],
      tags: ['Laravel', 'Flutter', 'API'],
    },
    {
      title: 'Stagiaire Développeur Web',
      company: 'Onecall - Riviéra 2, Abidjan, Côte d\'Ivoire',
      period: 'Avril 2022 - Septembre 2022',
      description: 'Stage de fin d\'étude pour l\'obtention de la licence professionnelle. Développement d\'applications et participation aux projets de l\'entreprise.',
      achievements: [
        'Développement d\'applications web avec Laravel',
        'Participation à la conception et analyse des besoins',
        'Rédaction de documentation technique',
        'Travail en équipe sur des projets réels',
      ],
      tags: ['Laravel', 'PHP', 'MySQL'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Expérience</h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Un parcours riche alliant développement, conseil et engagement communautaire
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = Briefcase;
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-slate-800 rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-all duration-200 hover:scale-105">
                      <div className="flex items-center space-x-2 mb-3">
                        <IconComponent className="w-5 h-5 text-slate-700" />
                        <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                      </div>

                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold text-slate-800">{exp.company}</span>
                      </div>

                      <div className="flex items-center space-x-2 text-slate-600 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>

                      <p className="text-slate-600 mb-4 leading-relaxed">{exp.description}</p>

                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600">
                            <span className="text-slate-800 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium border border-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}