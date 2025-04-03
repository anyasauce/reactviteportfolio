import React, { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Chatbot from './components/features/Chatbot';


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
        {activeSection === 'home' && <Home navigateTo={navigateTo} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'contact' && <Contact />}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;