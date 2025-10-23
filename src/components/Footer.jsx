import { Code2, Github, Linkedin, Mail } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-8 h-8" strokeWidth={2} />
              <span className="text-xl font-bold">Kouamefred</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Développeur fullstack passionné, consultant informatique et leader communautaire.
              Créateur de solutions digitales performantes et innovantes.
            </p>
          </div>
          <div className="flex-1 md:text-right">
            <h3 className="text-lg font-semibold mb-4">Restons connectés</h3>
            <div className="flex justify-start md:justify-end space-x-4 mb-4">
              <a
                href="https://github.com/kouamefredDev"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-slate-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/junior-kouame-0aaaa1326"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:kouamefred.dev@gmail.com"
                className="bg-slate-800 p-3 rounded-full hover:bg-slate-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">kouamefred.dev@gmail.com</p>
            <p className="text-slate-400 text-sm">Katiola, Côte d'Ivoire</p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} | Tous droits réservés.
          </p>
          <p className="text-slate-400 text-sm flex items-center space-x-1">
            <span>Créé avec</span>
            <span>React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}