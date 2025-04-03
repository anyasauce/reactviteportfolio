import React from 'react';

function Projects() {
    const projects = [
        {
            id: 1,
            title: "ITSD ID Reservation System",
            description: "A system designed to efficiently handle and manage ID reservations for users.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 2,
            title: "Rizal Ibarra Profiling System",
            description: "An efficient profiling system for Rizal's data that centralizes and manages personal information.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 3,
            title: "Roblox Jailbreak System",
            description: "A system for managing Roblox Jailbreak players' data.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 4,
            title: "Attendance System",
            description: "Tracks and manages attendance records efficiently.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 5,
            title: "Attendance Form System",
            description: "Simplifies attendance submission through an online form.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 6,
            title: "Phinma UI Student Management System",
            description: "Manages student records and information for efficiency.",
            technologies: ["Python Flask", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 7,
            title: "Coffee Shop System",
            description: "Handles orders and inventory for coffee shop operations.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 8,
            title: "Water Refilling System",
            description: "Efficiently manages water refilling service requests.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 9,
            title: "Feedback Form System",
            description: "Collects and organizes user feedback efficiently.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 10,
            title: "ID Generator System",
            description: "Generates unique IDs for various applications.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 11,
            title: "RFID System",
            description: "Manages RFID-based attendance and tracking system.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 12,
            title: "E-Commerce System",
            description: "Facilitates online shopping and transaction management.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 13,
            title: "SDMS Student Management System",
            description: "Comprehensive system for managing student information.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 14,
            title: "Coffee Shop Web Design",
            description: "Frontend design for a coffee shop website.",
            technologies: ["HTML", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 15,
            title: "Good Student Web Design",
            description: "Frontend design showcasing student achievements.",
            technologies: ["HTML", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 16,
            title: "IOS Calculator Web Design",
            description: "Functional calculator with iOS-style design.",
            technologies: ["HTML", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 17,
            title: "E-Commerce Web Design",
            description: "Frontend design for an e-commerce platform.",
            technologies: ["HTML", "Bootstrap", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        },
        {
            id: 18,
            title: "Giveaway System",
            description: "System for managing giveaway entries and winners.",
            technologies: ["HTML", "PHP Vanilla", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/600x400",
            github: "#",
            demo: "#"
        }
    ];

    return (
        <section className="py-5">
            <h2 className="section-title">My Projects</h2>
            <p className="mb-5">Here are some of the projects I've worked on. Each represents different skills and technologies I've mastered.</p>

            <div className="row g-4">
                {projects.map(project => (
                    <div className="col-md-6" key={project.id}>
                        <div className="card project-card h-100 border-0 bg-dark bg-opacity-25">
                            <img src={project.image} className="card-img-top" alt={project.title} />
                            <div className="card-body">
                                <h4 className="card-title">{project.title}</h4>
                                <p className="card-text">{project.description}</p>
                                <div className="mb-3">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="badge bg-primary me-2 mb-2">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="card-footer bg-transparent border-0">
                                <div className="d-flex gap-2">
                                    <a href={project.github} className="btn btn-sm btn-outline-primary">
                                        <i className="bi bi-github me-1"></i> Code
                                    </a>
                                    <a href={project.demo} className="btn btn-sm btn-primary">
                                        <i className="bi bi-eye me-1"></i> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;