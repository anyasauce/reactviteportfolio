import React from 'react';

function Home() {
    // const handleDownloadCV = () => {
    //     fetch('/picture.jpg')
    //         .then(response => {
    //             if (!response.ok) throw new Error('File not found');
    //             return response.blob();
    //         })
    //         .then(blob => {
    //             const link = document.createElement('a');
    //             link.href = URL.createObjectURL(blob);
    //             link.download = 'Josiah-Gallenero-CV.jpg';
    //             document.body.appendChild(link);
    //             link.click();
    //             document.body.removeChild(link);
    //         })
    //         .catch(error => {
    //             alert('CV file not found!');
    //             console.error('Error downloading CV:', error);
    //         });
    // };

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
        <section className="hero-section">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <h1 className="display-4 fw-bold mb-4">Hi, I'm <span className="text-primary">Josiah Danielle Gallenero</span></h1>
                    <h2 className="h3 mb-4">Web Developer</h2>
                    <p className="lead mb-4">Passionate about creating both static and dynamic web applications using modern technologies. Welcome to my portfolio!</p>
                    <div className="d-flex gap-3">
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={handleDownloadCV}
                        >
                            Download CV <i className="bi bi-download ms-2"></i>
                        </button>
                        <button
                            className="btn btn-outline-primary btn-lg"
                            onClick={handleContactClick}
                        >
                            Contact Me <i className="bi bi-envelope ms-2"></i>
                        </button>
                    </div>
                </div>
                <div className="col-lg-6 text-center">
                    <div className="bg-primary bg-opacity-10 p-5 d-inline-block rounded-circle">
                        <i
                            className="bi bi-laptop text-primary"
                            style={{
                                fontSize: '8rem',
                                width: '200px',
                                height: '200px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        ></i>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;