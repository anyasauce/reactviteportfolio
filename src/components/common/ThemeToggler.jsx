import React from 'react';

function ThemeToggler({ theme, toggleTheme }) {
    return (
        <button className="theme-toggler ms-2 border-0 bg-transparent" onClick={toggleTheme}>
            {theme === 'dark' ? (
                <i className="bi bi-sun-fill text-warning"></i>
            ) : (
                <i className="bi bi-moon-fill text-primary"></i>
            )}
        </button>
    );
}

export default ThemeToggler;