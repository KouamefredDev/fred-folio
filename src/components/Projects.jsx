import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Personnel',
      description: 'Site portfolio moderne et responsive présentant mes compétences, expériences et projets. Design élégant avec animations fluides.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React.js', 'Tailwind CSS', 'Responsive Design'],
      liveUrl: null,
      githubUrl: 'https://github.com/KouamefredDev/fred-folio', // Mettez l'URL de votre repo GitHub
    },
    {
      title: 'Système de Gestion de Stock',
      description: 'Application web complète pour la gestion de stock de boutique avec tableau de bord, gestion des produits, inventaire et rapports.',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React.js', 'Django', 'PostgreSQL', 'REST API'],
      liveUrl: null,
      githubUrl: 'https://github.com/KouamefredDev/boutique', // Mettez l'URL de votre repo GitHub
    },
    {
      title: 'Plateforme de Digitalisation d\'Église',
      description: 'Solution web et mobile complète pour la gestion d\'église : membres, événements, finances, communications. Projet en cours de développement.',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Laravel', 'Flutter', 'MySQL', 'Gestion de projet'],
      liveUrl: null,
      githubUrl: null, // Projet privé
      isPrivate: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Projets</h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Une sélection de projets démontrant mon expertise technique et ma polyvalence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {project.isPrivate && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-slate-900/80 text-white text-xs font-medium rounded-full">
                    Projet Privé
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Voir</span>
                    </a>
                  ) : (
                    <div className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-slate-300 text-slate-500 rounded-lg cursor-not-allowed font-medium">
                      <ExternalLink className="w-4 h-4" />
                      <span>Non disponible</span>
                    </div>
                  )}
                  
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      className="flex items-center justify-center px-4 py-2 bg-slate-100 text-slate-800 rounded-lg hover:bg-slate-200 transition-colors border border-slate-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  ) : (
                    <div className="flex items-center justify-center px-4 py-2 bg-slate-100 text-slate-400 rounded-lg cursor-not-allowed border border-slate-200">
                      <Github className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}