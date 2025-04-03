import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('');

        const API_URL = process.env.NODE_ENV === 'production'
            ? 'https://josiahh.vercel.app/api/sendEmail'
            : 'http://localhost:5000/api/sendEmail';

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const responseText = await response.text();
            console.log("Raw response:", responseText);

            try {
                const data = JSON.parse(responseText);
                if (response.ok) {
                    setStatus('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    setStatus(data.message || 'Failed to send message.');
                }
            } catch (jsonError) {
                setStatus('Failed to send message, unexpected response format.');
                console.error('Error parsing JSON:', jsonError);
            }
        } catch (error) {
            console.error('Error in sending message:', error);
            setStatus(`Failed to send message, please try again. Error: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <section className="contact-section container py-5" id="contact">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4 p-lg-5">
                            <h2 className="display-6 fw-bold mb-4 text-primary">Contact Me</h2>
                            <p className="lead mb-5">
                                Have a project in mind or want to collaborate? Feel free to reach out!
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        className="form-control form-control-lg"
                                        id="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message here..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-lg" disabled={isLoading}>
                                        {isLoading ? 'Sending...' : 'Send Message'} <i className="bi bi-send ms-2"></i>
                                    </button>
                                </div>
                            </form>

                            {status && (
                                <div className="mt-4 alert alert-info">
                                    {status}
                                </div>
                            )}

                            <div className="mt-5 pt-4 border-top">
                                <h3 className="h5 mb-3">Other ways to connect</h3>
                                <div className="d-flex gap-3 flex-wrap">
                                    <a href="mailto:josiahdanip@gmail.com" className="btn btn-outline-primary">
                                        <i className="bi bi-envelope me-2"></i> Email
                                    </a>
                                    <a href="https://linkedin.com/in/josiah-danielle-gallenero" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                                        <i className="bi bi-linkedin me-2"></i> LinkedIn
                                    </a>
                                    <a href="https://github.com/josiahdanielle" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                                        <i className="bi bi-github me-2"></i> GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
