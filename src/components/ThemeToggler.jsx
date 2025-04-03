import React from 'react';

function ThemeToggler({ theme, toggleTheme }) {
    return (
        <div className="theme-toggler ms-2" onClick={toggleTheme}>
            {theme === 'dark' ? (
                <i className="bi bi-sun-fill text-warning"></i>
            ) : (
                <i className="bi bi-moon-fill text-primary"></i>
            )}
        </div>
    );
}

export default ThemeToggler;