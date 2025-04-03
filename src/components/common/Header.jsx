import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggler from './ThemeToggler';

function Header({ theme, toggleTheme }) {
    return (
        <nav role="navigation" className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top transition-all duration-300">
            <div className="container">
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <span className="icon bg-primary bg-opacity-75 p-2 rounded me-2 d-flex align-items-center justify-content-center">
                        <i className="bi bi-terminal text-white"></i>
                    </span>
                    <span className="fw-bold">Portfolio</span>
                </NavLink>

                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        {[
                            { id: '/', label: 'Home', icon: 'bi-house' },
                            { id: '/about', label: 'About', icon: 'bi-person' },
                            { id: '/projects', label: 'Projects', icon: 'bi-briefcase' },
                            { id: '/skills', label: 'Skills', icon: 'bi-star' },
                        ].map(item => (
                            <li className="nav-item mx-1" key={item.id}>
                                <NavLink
                                    className={({ isActive }) => `nav-link px-3 py-2 rounded-pill ${isActive ? 'active bg-primary bg-opacity-25' : 'text-light'}`}
                                    to={item.id}
                                >
                                    <i className={`bi ${item.icon} me-1`}></i> {item.label}
                                </NavLink>
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
