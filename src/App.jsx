import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };

  const navigateTo = (section) => {
    setActiveSection(section);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <Header
        activeSection={activeSection}
        navigateTo={navigateTo}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="container py-4">
        {activeSection === 'home' && <Home />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'skills' && <Skills />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
