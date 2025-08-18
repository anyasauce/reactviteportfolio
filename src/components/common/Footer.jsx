import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        {
            name: "GitHub",
            icon: "fab fa-github",
            url: "https://github.com/anyasauce",
            color: "hover:text-gray-800 hover:bg-gray-100"
        },
        {
            name: "LinkedIn",
            icon: "fab fa-linkedin-in",
            url: "https://www.linkedin.com/in/josiah-danielle-gallenero-750966290/",
            color: "hover:text-blue-600 hover:bg-blue-100"
        },
        {
            name: "Facebook",
            icon: "fab fa-facebook-f",
            url: "https://www.facebook.com/josiahqt1",
            color: "hover:text-blue-700 hover:bg-blue-100"
        },
        {
            name: "Email",
            icon: "fas fa-envelope",
            url: "mailto:josiahdanielle09gallenero@gmail.com",
            color: "hover:text-red-600 hover:bg-red-100"
        }
    ];

    const techStack = [
        { name: "React.js", icon: "fab fa-react", color: "text-cyan-400" },
        { name: "Bootstrap 5", icon: "fab fa-bootstrap", color: "text-purple-500" },
    ];

    return (
        <footer className="footer mt-auto py-6 bg-dark bg-opacity-95 border-top border-secondary border-opacity-25">
            <div className="container">
                <div className="row g-4 align-items-center">
                    
                    <div className="col-md-4 text-center text-md-start">
                        <h5 className="mb-2 text-primary font-bold text-lg">Josiah Danielle Gallenero</h5>
                        <p className="text-muted mb-2 small">Full Stack Web Developer</p>
                        
                        <p className="text-muted small mb-1">Tech Stack Used:</p>
                        <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                            {techStack.map((tech, index) => (
                                <div key={index} className="d-flex align-items-center gap-2">
                                    <i className={`${tech.icon} ${tech.color} fs-5`}></i>
                                    <span className="text-light small">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div className="social-icons d-flex justify-content-center gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-decoration-none text-light bg-dark bg-opacity-50 p-2 rounded-circle d-flex align-items-center justify-content-center transition-all duration-300 ${social.color}`}
                                    style={{ width: '42px', height: '42px' }}
                                    aria-label={social.name}
                                    title={social.name}
                                >
                                    <i className={`${social.icon} fs-5`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-4 text-center text-md-end">
                        <p className="mb-0 small text-muted">
                            &copy; {currentYear} Josiah Danielle Gallenero. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
