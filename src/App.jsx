import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ApisServices from './components/ApiServices';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Prestations from './pages/Prestation';

function Home({ activeSection, setActiveSection }) {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <ApisServices />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* ✅ Les routes ici */}
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