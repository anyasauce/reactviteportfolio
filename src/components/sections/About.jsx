import React from 'react';
import photo from '../../assets/picture.jpg';

function About() {
    const personalInterests = [
        { icon: 'bi-book', label: 'Reading' },
        { icon: 'bi-camera', label: 'Photography' },
        { icon: 'bi-bicycle', label: 'Cycling' },
        { icon: 'bi-music-note-beamed', label: 'Music' },
        { icon: 'bi-bicycle', label: 'Motorcycling' },
        { icon: 'bi-laptop', label: 'Coding' },
        { icon: 'bi-controller', label: 'Gaming' },
        { icon: 'bi-tv', label: 'Watching Movies' }
    ];

    const education = {
        degree: 'Bachelor of Science in Information Technology',
        school: 'PHINMA University of Iloilo',
        year: '2023 – 2027, Expected Graduation',
        desc: 'Currently in my 2nd year of studies, focusing on web development.'
    };

    const freelanceStats = [
        { icon: 'fa-solid fa-users', title: 'Satisfied Clients', value: '15+' },
        { icon: 'fa-solid fa-diagram-project', title: 'Projects', value: '20+' },
        { icon: 'fa-solid fa-calendar-check', title: 'Freelance Since', value: '2024', large: true }
    ];

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
                            <p>Hi, I'm Josiah Danielle Gallenero, an Junior Full Stack Web Developer with a passion for creating both static and dynamic websites. My skills range from frontend design to backend development, and I'm always eager to learn new technologies.</p>
                            <p>I am currently a 2nd year college student at PHINMA University of Iloilo, pursuing my degree in Information Technology. In my free time, I work on personal projects and freelance gigs to expand my portfolio and experience.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card border-0 bg-dark bg-opacity-25 h-100">
                        <div className="card-body">
                            <h3 className="card-title mb-4">Education</h3>
                            <div className="mb-4">
                                <h5 className="text-primary">{education.degree}</h5>
                                <p className="text-muted mb-1">{education.school} ({education.year})</p>
                                <p>{education.desc}</p>
                            </div>

                            <h3 className="card-title mb-4 mt-5">Freelance Stats</h3>
                            <div className="row g-3">
                                {freelanceStats.map((stat, index) => (
                                    <div key={index} className={`col-${stat.large ? '12' : '6'} d-flex justify-content-center`}>
                                        <div className="p-3 bg-opacity-50 rounded text-center">
                                            <i className={`${stat.icon} ${stat.large ? 'fs-1' : 'fs-3'} text-primary mb-2`}></i>
                                            <h5 className="mb-1">{stat.title}</h5>
                                            <p className="mb-0">{stat.value}</p>
                                        </div>
                                    </div>
                                ))}
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
                                {personalInterests.map((interest, index) => (
                                    <div key={index} className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <i className={`bi ${interest.icon} fs-1 text-primary mb-2`}></i>
                                            <h5>{interest.label}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
