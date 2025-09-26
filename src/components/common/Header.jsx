import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, User, GitBranch, Lightbulb } from 'lucide-react';
import '../styles/Header.css';

function Header() {
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
        <nav role="navigation" className="navbar navbar-expand-lg shadow sticky-top custom-navbar">
            <div className="container py-2">
                <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
                    <span className="brand-icon d-flex justify-content-center align-items-center rounded-circle border-2 border-indigo-600" style={{ width: '40px', height: '40px' }}>
                        <i className="bi bi-terminal text-indigo-600" style={{ fontSize: '20px' }}></i>
                    </span>
                    <span className="fw-bold fs-5" style={{ letterSpacing: '1.1px' }}>MyPortfolio</span>
                </NavLink>

                <button
                    ref={navbarTogglerRef}
                    className="navbar-toggler"
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
                    <ul className="navbar-nav ms-auto gap-lg-3 text-center">
                        {[ 
                            { id: '/', label: 'Home', icon: <Home /> },
                            { id: '/about', label: 'About', icon: <User /> },
                            { id: '/experience', label: 'Experience', icon: <GitBranch /> },
                            { id: '/projects', label: 'Projects', icon: <GitBranch /> },
                            { id: '/skills', label: 'Skills', icon: <Lightbulb /> },
                        ].map(item => (
                            <li className="nav-item" key={item.id}>
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link nav-custom-link px-3 py-2 ${isActive ? 'active' : ''}`
                                    }
                                    to={item.id}
                                >
                                    <span className="me-2">{item.icon}</span>
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
