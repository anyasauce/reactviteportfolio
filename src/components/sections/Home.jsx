import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    const [text, setText] = useState('');
    const fullText = 'Full Stack Web Developer';
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting && index < fullText.length) {
                setText(prev => prev + fullText.charAt(index));
                setIndex(prev => prev + 1);
            } else if (isDeleting && index > 0) {
                setText(prev => prev.slice(0, -1));
                setIndex(prev => prev - 1);
            } else {
                setIsDeleting(!isDeleting);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [index, isDeleting]);

    const navigate = useNavigate();

    const handleDownloadCV = () => {
        alert('CV file not found!');
        console.error('Error downloading CV: File not found');
    };

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <section className="hero-section container text-center text-lg-start py-5">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6 mb-4">
                    <h1 className="display-5 fw-bold mb-3">
                        Hi! My name is <span className="text-primary">Josiah Danielle Gallenero</span>
                    </h1>
                    <h2 className="h4 mb-3">
                        I'm a <span className="typing-text text-primary">{text}</span>
                        <span className="blinking-cursor">|</span>
                    </h2>
                    <p className="mb-4">
                        Passionate about creating both static and dynamic web applications using modern technologies. Welcome to my portfolio!
                    </p>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-lg-start">
                        <button className="btn btn-primary btn-lg" onClick={handleDownloadCV}>
                            Download CV <i className="bi bi-download ms-2"></i>
                        </button>
                        <button className="btn btn-outline-primary btn-lg" onClick={handleContactClick}>
                            Contact Me <i className="bi bi-envelope ms-2"></i>
                        </button>
                    </div>
                    <div className="mt-3">
                        <a href="https://www.buymeacoffee.com/josiahdanip">
                            <img
                            src="https://img.buymeacoffee.com/button-api/?text=Support me on BuyMeCoffee&emoji=☕&slug=josiahdanip&button_colour=6c63ff&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
                            alt="Support me on BuyMeCoffee button"
                            title="Support me on BuyMeCoffee"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
