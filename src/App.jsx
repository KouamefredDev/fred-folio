import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ApiServices from './components/ApiServices';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Prestations from './pages/Prestation';

function Home({ activeSection, setActiveSection }) {
  return (
    <main>
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="apiservices"><ApiServices /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // 🔹 Observer les sections visibles
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% de visibilité pour activer
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header dynamique */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={<Home activeSection={activeSection} setActiveSection={setActiveSection} />}
        />
        <Route path="/prestation" element={<Prestations />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;