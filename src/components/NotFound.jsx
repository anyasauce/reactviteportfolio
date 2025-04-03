import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    const handleNotFoundClick = () => {
        navigate('/');
    };

    return (
        <section className="not-found-section container py-5 text-center">
            <div className="text-center">
                <div className="card-body p-5">
                    <h1 className="display-1 text-danger mb-4">
                        <i className="bi bi-exclamation-triangle-fill"></i> 404
                    </h1>
                    <h2 className="h3 text-white mb-3">Oops! Page Not Found</h2>
                    <p className="lead text-muted mb-4">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <button
                        className="btn btn-primary btn-lg px-4 py-2 rounded-pill shadow"
                        onClick={handleNotFoundClick}
                    >
                        <i className="bi bi-house-door me-2"></i> Go Back Home
                    </button>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
