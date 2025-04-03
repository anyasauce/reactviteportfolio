import React from 'react';

function Skills() {
    const techStack = [
        { name: "HTML", icon: "fa-brands fa-html5", color: "#E34F26" },
        { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
        { name: "JavaScript", icon: "fa-brands fa-js", color: "#F7DF1E" },
        { name: "Bootstrap 5", icon: "fa-brands fa-bootstrap", color: "#7952B3" },
        { name: "PHP", icon: "fa-brands fa-php", color: "#777BB4" },
        { name: "Python Flask", icon: "fa-brands fa-python", color: "#3776AB" },
        { name: "MySQL", icon: "fa-solid fa-database", color: "#4479A1" }
    ];

    const learningTechStack = [
        { name: "Laravel", icon: "fa-brands fa-laravel", color: "#FF2D20" },
        { name: "React.js", icon: "fa-brands fa-react", color: "#61DAFB" },
        { name: "API", icon: "fa-solid fa-code", color: "#E6E3E3FF" },
        { name: "Tailwind.css", icon: "fa-solid fa-wind", color: "#06B6D4" },
        { name: "Vite", icon: "fa-solid fa-bolt", color: "#FFD62E" },
        { name: "MongoDB", icon: "fa-solid fa-database", color: "#47A248" },
        { name: "PDO", icon: "fa-solid fa-shield-halved", color: "#59666C" }
    ];

    const tools = [
        { name: "VS Code", icon: "fa-solid fa-code", color: "#007ACC" },
        { name: "Git", icon: "fa-brands fa-git-alt", color: "#F05032" },
        { name: "GitHub", icon: "fa-brands fa-github", color: "#E6E3E3FF" },
        { name: "Vercel", icon: "fa-solid fa-cloud-arrow-up", color: "#E6E3E3FF" },
        { name: "Canva", icon: "fa-solid fa-palette", color: "#00C4CC" }
    ];

    return (
        <section className="py-5">
            <h2 className="section-title">My Skills</h2>

            <div className="row mb-5">
                <div className="col-md-6 mb-4 mb-md-0">
                    <div className="card border-0 bg-dark bg-opacity-25 h-100">
                        <div className="card-body">
                            <h3 className="mb-4">Tech Stack</h3>
                            <div className="row g-3">
                                {techStack.map((skill, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="skill-item rounded d-flex align-items-center p-3 hover:bg-dark hover:bg-opacity-50 transition-colors">
                                            <i
                                                className={`${skill.icon} me-3 fs-4`}
                                                style={{ color: skill.color }}
                                            ></i>
                                            <span>{skill.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card border-0 bg-dark bg-opacity-25 h-100">
                        <div className="card-body">
                            <h3 className="mb-4">Learning Phase Tech Stack</h3>
                            <div className="row g-3">
                                {learningTechStack.map((skill, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="skill-item rounded d-flex align-items-center p-3 hover:bg-dark hover:bg-opacity-50 transition-colors">
                                            <i
                                                className={`${skill.icon} me-3 fs-4`}
                                                style={{ color: skill.color }}
                                            ></i>
                                            <span>{skill.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card border-0 bg-dark bg-opacity-25">
                        <div className="card-body">
                            <h3 className="card-title mb-4">Tools</h3>
                            <div className="row g-3">
                                {tools.map((tool, index) => (
                                    <div className="col-6 col-md-3" key={index}>
                                        <div className="p-3 rounded bg-dark bg-opacity-50 text-center h-100 hover:bg-opacity-75 transition-colors">
                                            <i
                                                className={`${tool.icon} fs-1 mb-2 d-block`}
                                                style={{ color: tool.color }}
                                            ></i>
                                            <h5 className="mb-0">{tool.name}</h5>
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

export default Skills;