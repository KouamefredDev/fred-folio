import { Code2, Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'experience', label: 'Expérience' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
    { id: 'prestation', label: 'Prestation', external: true },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    
    // Si on n'est pas sur la page d'accueil, retourner d'abord à l'accueil
    if (location.pathname !== '/') {
      navigate('/');
      // Attendre que la page se charge, puis scroller
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Si déjà sur la page d'accueil, scroller directement
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection('home');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={handleLogoClick}
          >
            <Code2 className="w-8 h-8 text-slate-800" strokeWidth={2} />
            <span className="text-xl font-bold text-slate-800">Kouamefred</span>
          </div>

          <nav className="hidden md:flex space-x-1">
            {menuItems.map((item) =>
              item.external ? (
                <Link
                  key={item.id}
                  to="/prestation"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === '/prestation'
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id && location.pathname === '/'
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <nav className="px-4 py-4 space-y-2">
            {menuItems.map((item) =>
              item.external ? (
                <Link
                  key={item.id}
                  to="/prestation"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === '/prestation'
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id && location.pathname === '/'
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}