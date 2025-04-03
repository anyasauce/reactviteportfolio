import React, { useState, useEffect } from 'react';
import ThemeToggler from './ThemeToggler';

function Header({ activeSection, navigateTo, theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark ${scrolled ? 'bg-dark bg-opacity-95' : 'bg-dark'} shadow-sm sticky-top transition-all duration-300`} style={{ transition: 'all 0.3s ease' }}>
            <div className="container">
                <a
                    className="navbar-brand d-flex align-items-center"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        navigateTo('home');
                    }}
                >
                    <span className="bg-primary bg-opacity-75 p-2 rounded me-2 d-flex align-items-center justify-content-center">
                        <i className="bi bi-terminal text-white"></i>
                    </span>
                    <span className="fw-bold">Portfolio</span>
                </a>

                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        {[
                            { id: 'home', label: 'Home', icon: 'bi-house' },
                            { id: 'about', label: 'About', icon: 'bi-person' },
                            { id: 'projects', label: 'Projects', icon: 'bi-briefcase' },
                            { id: 'skills', label: 'Skills', icon: 'bi-star' },
                        ].map(item => (
                            <li className="nav-item mx-1" key={item.id}>
                                <a
                                    className={`nav-link px-3 py-2 rounded-pill ${activeSection === item.id ? 'active bg-primary bg-opacity-25' : 'text-light'}`}
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigateTo(item.id);
                                    }}
                                >
                                    <i className={`bi ${item.icon} me-1`}></i> {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="d-flex align-items-center">
                        <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;