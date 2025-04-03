import React from 'react';

function Home() {
    const handleDownloadCV = () => {
        alert('CV file not found!');
        console.error('Error downloading CV: File not found');
    };

    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Contact section not found!');
        }
    };

    return (
        <section className="hero-section container text-center text-lg-start py-5">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6 mb-4">
                    <h1 className="display-5 fw-bold mb-3">Hi, I'm <span className="text-primary">Josiah Danielle Gallenero</span></h1>
                    <h2 className="h4 mb-3">Web Developer</h2>
                    <p className="lead mb-4">Passionate about creating both static and dynamic web applications using modern technologies. Welcome to my portfolio!</p>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-lg-start">
                        <button className="btn btn-primary btn-lg" onClick={handleDownloadCV}>
                            Download CV <i className="bi bi-download ms-2"></i>
                        </button>
                        <button className="btn btn-outline-primary btn-lg" onClick={handleContactClick}>
                            Contact Me <i className="bi bi-envelope ms-2"></i>
                        </button>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Home;
