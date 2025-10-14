import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              FJK
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-4">
            Consultant Informatique & Développeur Fullstack
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-6 max-w-2xl">
            Kouamé Konan Aimé Frédéric Junior
          </p>
          <p className="text-lg text-slate-500 mb-10 max-w-3xl leading-relaxed">
            Passionné par la création d'applications web et mobile performantes. 
            Orienté vers Laravel, Flutter et les architectures modernes avec plus de 2 ans d'expérience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a href="#contact" className="px-8 py-4 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-900 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Me contacter</span>
            </a>
            <a 
              href="/moncv.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-slate-800 rounded-lg font-medium hover:bg-slate-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 border border-slate-200 flex items-center space-x-2"
            >
              <FileText className="w-5 h-5" />
              <span>Voir mon CV</span>
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/kouamefredDev" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 border border-slate-200">
              <Github className="w-6 h-6 text-slate-700" />
            </a>
            <a href="https://www.linkedin.com/in/junior-kouame-0aaaa1326" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 border border-slate-200">
              <Linkedin className="w-6 h-6 text-slate-700" />
            </a>
            <a href="mailto:kouamefred.dev@gmail.com" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 border border-slate-200">
              <Mail className="w-6 h-6 text-slate-700" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}