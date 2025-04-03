import React from 'react';

function NotFound({ navigateTo }) {
    return (
        <section className="not-found-section container py-5 text-center">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4 p-lg-5">
                            <h1 className="display-4 text-danger mb-4">
                                <i className="bi bi-exclamation-triangle-fill"></i> 404
                            </h1>
                            <h2 className="h3 mb-4">Page Not Found</h2>
                            <p className="lead mb-5">
                                The section you're looking for doesn't exist or has been moved.
                            </p>
                            <button
                                className="btn btn-primary btn-lg"
                                onClick={() => navigateTo('home')}
                            >
                                <i className="bi bi-house-door me-2"></i> Return to Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NotFound;