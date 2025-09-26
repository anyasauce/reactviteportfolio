import { useState } from "react";
import Hackaton from '../../assets/experience/hackaton.png';
import Rizal from '../../assets/experience/rizal.png';
import Summer from '../../assets/experience/summer.png';

function ExperienceSection() {
    const experiences = [
        {
            role: "Full Stack Developer | Team Leader",
            period: "2025",
            title: "Iloilo Startup Hackathon",
            team: "CITECHNOVATORS",
            description:
                "One of my best experiences as a developer — leading a 3-day hackathon project at ISAT-U Iloilo. Together with my team *CITECHNOVATORS*, we built the GSO Automated Service Requests System for government offices, designed to streamline request handling and reduce manual processing. This experience sharpened my leadership, teamwork, and problem-solving skills under pressure.",
            technologies: ["HTML", "Tailwind CSS", "JavaScript", "PHP (Vanilla)", "MySQL", "jQuery"],
            image: Hackaton,
        },
        {
            role: "Full Stack Developer",
            period: "2024",
            title: "Rizal Ibarra Brgy System",
            description:
                "Developed a barangay management system for manual input of resident and community data. Replaced manual records with a digital solution for efficient storage, retrieval, and management.",
            technologies: ["HTML", "CSS", "JavaScript", "PHP (Vanilla)", "MySQL"],
            image: Rizal,
        },
        {
            role: "Front End Developer",
            period: "2025",
            title: "UIPC Summer Bootcamp",
            description:
                "Served as a developer during the UIPC Summer Bootcamp, where I helped members and officers enhance their web design and front-end development skills through collaborative training and guided activities.",
            technologies: ["HTML", "CSS", "Bootstrap 5"],
            image: Summer,
        },
    ];

    const [selectedExperience, setSelectedExperience] = useState(null);

    return (
        <section className="py-5">
            <h2 className="section-title">My Experience</h2>
            <p className="mb-5">
                Here are some of my professional and learning experiences that shaped my
                journey as a developer.
            </p>

            <div className="row g-4">
                {experiences.map((exp, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="card h-100 border-0 bg-dark bg-opacity-25"
                            style={{ cursor: "pointer" }}
                            data-bs-toggle="modal"
                            data-bs-target="#experienceModal"
                            onClick={() => setSelectedExperience(exp)}
                        >
                            {exp.image && (
                                <div
                                    style={{
                                        height: "350px",
                                        overflow: "hidden",
                                        borderTopLeftRadius: "0.5rem",
                                        borderTopRightRadius: "0.5rem",
                                    }}
                                >
                                    <img
                                        src={exp.image}
                                        alt={exp.title}
                                        className="card-img-top"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>
                            )}
                            <div className="card-body">
                                <h4 className="card-title">{exp.title}</h4>
                                <h6 className="text-muted">
                                    {exp.role} • {exp.period}
                                </h6>
                                <p className="card-text mt-2">{exp.description}</p>
                                <div className="mb-2">
                                    {exp.technologies.map((tech, i) => (
                                        <span key={i} className="badge bg-primary me-2 mb-2">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <div
                className="modal fade"
                id="experienceModal"
                tabIndex="-1"
                aria-labelledby="experienceModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content bg-dark text-white">
                        <div className="modal-header border-0">
                            <h5 className="modal-title" id="experienceModalLabel">
                                {selectedExperience?.role} - {selectedExperience?.title}
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {selectedExperience?.image && (
                                <div className="mb-3"
                                    style={{
                                        height: "450px",
                                        overflow: "hidden",
                                        borderTopLeftRadius: "0.5rem",
                                        borderTopRightRadius: "0.5rem",
                                    }}
                                >
                                    <img
                                        src={selectedExperience.image}
                                        alt={selectedExperience.title}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>

                            )}
                            <h6>
                                {selectedExperience?.title} • {selectedExperience?.period}
                            </h6>
                            <p className="mt-3">{selectedExperience?.description}</p>
                            <div>
                                {selectedExperience?.technologies.map((tech, i) => (
                                    <span key={i} className="badge bg-primary me-2 mb-2">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;
