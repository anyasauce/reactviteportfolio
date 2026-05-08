import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Chatbot from './components/features/Chatbot';
import NotFound from './components/NotFound';
import Experience from './components/sections/Experience';
import TermsPolicy from './components/sections/TermsPolicy';
import AdsenseScript from './components/ads/AdsenseScript';
import GoogleAds from './components/ads/GoogleAds'; // For sidebar/bottom ads

const Analytics = import.meta.env.PROD 
  ? lazy(() => import('@vercel/analytics/react').then(mod => ({ default: mod.Analytics })))
  : () => null;

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };

  return (
    <Router>
      <AdsenseScript /> {/* Load AdSense script once */}
      <div className="app">
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        <div className="container-fluid">
          <div className="row">
            {/* Main content area */}
            <main className="col-12 col-lg-9 py-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/termspolicy" element={<TermsPolicy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            
            {/* Sidebar ads - only show on certain pages
            <aside className="col-lg-3 d-none d-lg-block">
              <div className="sticky-top pt-4" style={{ top: '20px' }}>
                <GoogleAds />
                <div className="mt-4">
                  <GoogleAds />
                </div>
                <p className="text-muted text-center small mt-2">
                  Advertisement
                </p>
              </div>
            </aside> */}
          </div>
        </div>
        
        {/* Footer ad - optional */}
        <div className="container mb-4">
          <GoogleAds />
        </div>
        
        <Footer />
        <Chatbot />
        {import.meta.env.PROD && (
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
        )}
      </div>
    </Router>
  );
}

export default App;