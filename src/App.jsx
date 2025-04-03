import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark'); // Default dark theme

  // Handle theme toggling
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };

  // Handle section navigation
  const navigateTo = (section) => {
    setActiveSection(section);
    window.scrollTo(0, 0);
  };

  // Render active section
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      default:
        return <Home />;
    }
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
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;