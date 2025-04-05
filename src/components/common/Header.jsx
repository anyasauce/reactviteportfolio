import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ThemeToggler from './ThemeToggler';
import '../styles/Header.css';


function Header({ theme, toggleTheme }) {
    const location = useLocation();
    const navbarCollapseRef = useRef(null);
    const navbarTogglerRef = useRef(null);

    useEffect(() => {
        function closeNavbar() {
            if (window.innerWidth < 992) {
                const collapse = navbarCollapseRef.current;
                const toggler = navbarTogglerRef.current;

                if (collapse && toggler && collapse.classList.contains('show')) {
                    toggler.click();
                }
            }
        }

        closeNavbar();
    }, [location]);

    return (
        <nav role="navigation" className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
            <div className="container">
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <span className="icon bg-primary bg-opacity-75 p-2 rounded me-2 d-flex align-items-center justify-content-center">
                        <i className="bi bi-terminal text-white"></i>
                    </span>
                    <span className="fw-bold">Portfolio</span>
                </NavLink>

                <button
                    ref={navbarTogglerRef}
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

                <div
                    ref={navbarCollapseRef}
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >
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