import React from 'react';
import photo from '../../assets/picture.jpg';

function About() {
    return (
        <section className="py-5">
            <h2 className="section-title">About Me</h2>

            <div className="row gy-4">
                <div className="col-md-6">
                    <div className="card border-0 bg-dark bg-opacity-25 h-100">
                        <div className="card-body">
                            <div className="text-center mb-4">
                                <div className="bg-primary bg-opacity-10 p-3 d-inline-block rounded-circle">
                                    <img
                                        src={photo}
                                        alt="Josiah Danielle Gallenero"
                                        className="img-fluid"
                                        style={{
                                            maxWidth: '250px',
                                            width: '250px',
                                            height: '250px',
                                            borderRadius: '50%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            </div>
                            <h3 className="card-title mb-4">Who I Am</h3>
                            <p>Hi, I'm Josiah Danielle Gallenero, an entry-level full stack web developer with a passion for creating both static and dynamic websites. My skills range from frontend design to backend development, and I'm always eager to learn new technologies.</p>
                            <p>I am currently a 2nd year college student at PHINMA University of Iloilo, pursuing my degree in Information Technology. In my free time, I work on personal projects and freelance gigs to expand my portfolio and experience.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card border-0 bg-dark bg-opacity-25 h-100">
                        <div className="card-body">
                            <h3 className="card-title mb-4">Education</h3>
                            <div className="mb-4">
                                <h5 className="text-primary">Bachelor of Science in Information Technology</h5>
                                <p className="text-muted mb-1">PHINMA University of Iloilo (2023 to Present)</p>
                                <p>Currently in my 2nd year of studies, focusing on web development.</p>
                            </div>

                            <h3 className="card-title mb-4 mt-5">Freelance Stats</h3>
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="p-3 bg-opacity-50 rounded text-center">
                                        <i className="fa-solid fa-users fs-3 text-primary mb-2"></i>
                                        <h5 className="mb-1">Statisfied Clients</h5>
                                        <p className="mb-0">5+</p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="p-3 bg-opacity-50 rounded text-center">
                                        <i className="fa-solid fa-diagram-project fs-3 text-primary mb-2"></i>
                                        <h5 className="mb-1">Projects</h5>
                                        <p className="mb-0">10+</p>
                                    </div>
                                </div>

                                <div className="col-12 d-flex justify-content-center">
                                    <div className="p-3 bg-opacity-50 rounded text-center">
                                        <i className="fa-solid fa-calendar-check fs-1 text-primary mb-2"></i>
                                        <h5>Freelance Since</h5>
                                        <p className="mb-0">2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <div className="card border-0 bg-dark bg-opacity-25">
                        <div className="card-body">
                            <h3 className="card-title mb-4">Personal Interests</h3>
                            <div className="row g-3">
                                <div className="col-md-3 col-6">
                                    <div className="text-center p-3">
                                        <i className="bi bi-book fs-1 text-primary mb-2"></i>
                                        <h5>Reading</h5>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="text-center p-3">
                                        <i className="bi bi-camera fs-1 text-primary mb-2"></i>
                                        <h5>Photography</h5>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="text-center p-3">
                                        <i className="bi bi-bicycle fs-1 text-primary mb-2"></i>
                                        <h5>Cycling</h5>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="text-center p-3">
                                        <i className="bi bi-music-note-beamed fs-1 text-primary mb-2"></i>
                                        <h5>Music</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;