import { Code, Smartphone, Server, Database, Cloud, GitBranch, Users, Monitor, Layers } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      color: 'from-blue-50 to-blue-100',
      skills: [
        { name: 'React.js', level: 20 },
        { name: 'JavaScript', level: 40 },
        { name: 'Tailwind CSS', level: 30 },
        { name: 'Bootstrap', level: 80 },
        { name: 'CSS/HTML', level: 90 },
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      color: 'from-green-50 to-green-100',
      skills: [
        { name: 'Flutter', level: 60 },
        { name: 'Dart', level: 60 },
        { name: 'Responsive Design', level: 70 },
      ],
    },
    {
      icon: Server,
      title: 'Backend',
      color: 'from-orange-50 to-orange-100',
      skills: [
        { name: 'Laravel/PHP', level: 70 },
        { name: 'Django/Python', level: 30 },
        { name: 'REST API', level: 50 },
      ],
    },
    {
      icon: Database,
      title: 'Base de données',
      color: 'from-purple-50 to-purple-100',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 40 },
        { name: 'SQL', level: 65 },
      ],
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      color: 'from-cyan-50 to-cyan-100',
      skills: [
        { name: 'Nginx', level: 40 },
        { name: 'VPS/Serveur mutualisé', level: 50 },
        { name: 'Configuration DNS', level: 50 },
        { name: 'Docker', level: 20 },
      ],
    },
    {
      icon: Monitor,
      title: 'Systèmes & Infrastructure',
      color: 'from-indigo-50 to-indigo-100',
      skills: [
        { name: 'Linux', level: 60 },
        { name: 'Mac', level: 60 },
        { name: 'Windows', level: 90 },
        { name: 'Maintenance informatique', level: 50 },
      ],
    },
    {
      icon: Layers,
      title: 'Architecture & Design Pattern',
      color: 'from-teal-50 to-teal-100',
      skills: [
        { name: 'MVC', level: 60 },
        { name: 'Repository Pattern', level: 40 },
        { name: 'Clean Architecture', level: 30 },
        { name: 'Architecture Monolithique', level: 70 },
        { name: 'Architecture monolithique distribuée', level: 30 },
      ],
    },
    {
      icon: GitBranch,
      title: 'Outils & Méthodes',
      color: 'from-rose-50 to-rose-100',
      skills: [
        { name: 'Git/GitHub/GitLab', level: 60 },
        { name: 'MERISE/UML', level: 55 },
        { name: 'Design graphique', level: 60 },
        { name: 'Prototypage', level: 55 },
      ],
    },
    {
      icon: Users,
      title: 'Management & Soft Skills',
      color: 'from-amber-50 to-amber-100',
      skills: [
        { name: 'Gestion de projet', level: 70 },
        { name: 'Leadership d\'équipe', level: 75 },
        { name: 'Gestion administrative', level: 65 },
        { name: 'Communication', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Compétences</h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Un savoir-faire polyvalent couvrant le développement web et mobile moderne
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 border border-slate-200"
              >
                <div className={`bg-gradient-to-br ${category.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="w-7 h-7 text-slate-700" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                        <span className="text-sm font-semibold text-slate-900">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-slate-700 to-slate-900 h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
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