import React from 'react';

function Skills() {
    const techStack = [
        {
            name: "HTML",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            color: "#E34F26"
        },
        {
            name: "CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            color: "#1572B6"
        },
        {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            color: "#F7DF1E"
        },
        {
            name: "Bootstrap",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            color: "#7952B3"
        },
        {
            name: "PHP",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            color: "#777BB4"
        },
        {
            name: "MySQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            color: "#4479A1"
        },
        {
            name: "Laravel",
            icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
            color: "#FF2D20"
        },
        {
            name: "Tailwind CSS",
            icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",  // Fixed typo in URL (plains -> plain)
            color: "#06B6D4"
        },
    ];

    const learningTechStack = [
        {
            name: "React.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            color: "#61DAFB"
        },
        {
            name: "Next.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            color: "#000000"
        },
        {
            name: "TypeScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            color: "#3178C6"
        },
        {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            color: "#339933"
        },
        {
            name: "Express.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            color: "#000000"
        },
        {
            name: "Resful API",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            color: "#68A063"
        },
        {
            name: "MongoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            color: "#47A248"
        },
        {
            name: "Supabase",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
            color: "#3ECF8E"
        },
        {
            name: "PostgreSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            color: "#336791"
        },
        {
            name: "ShadCN/UI",
            icon: "https://ui.shadcn.com/favicon.ico",
            color: "#7C3AED"
        },
    ];

    const tools = [
        {
            name: "VS Code",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
            color: "#007ACC"
        },
        {
            name: "Git",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            color: "#F05032"
        },
        {
            name: "GitHub",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            color: "#181717"
        },
        {
            name: "Vercel",
            icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
            color: "#000000"
        },
        {
            name: "Canva",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
            color: "#00C4CC"
        },
        {
            "name": "Postman",
            "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
            "color": "#FF6C37"
        },
        {
            "name": "Render",
            "icon": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/render.svg",
            "color": "#46E3B7"
        },
        {
            "name": "Docker",
            "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            "color": "#2496ED"
        }
    ];
    
    const integration = [
        {
            name: "Email Integration",
            icon: "https://www.svgrepo.com/show/477054/email-download.svg",
            color: "#007ACC"
        },
        {
            name: "SMS Integration",
            icon: "https://www.svgrepo.com/show/474993/sms.svg",
            color: "#007ACC"
        },
        {
            name: "Payment Integration",
            icon: "https://www.svgrepo.com/show/301697/payment-security-bank.svg",
            color: "#007ACC"
        },
        {
            name: "Maps Integration",
            icon: "https://www.svgrepo.com/show/469229/maps.svg",
            color: "#34A853"
        },
        {
            name: "Authentication / OAuth",
            icon: "https://www.svgrepo.com/show/530163/verified.svg",
            color: "#F9AB00"
        },
        {
            name: "Google Services",
            icon: "https://www.svgrepo.com/show/475656/google-color.svg",
            color: "#4285F4"
        },
        {
            name: "Geolocation",
            icon: "https://www.svgrepo.com/show/476876/geo-fence.svg",
            color: "#FF6D00"
        },
        {
            name: "Geofencing",
            icon: "https://www.svgrepo.com/show/476876/geo-fence.svg",
            color: "#FF5722"
        },
        {
            name: "Push Notifications",
            icon: "https://www.svgrepo.com/show/354137/onesignal.svg",
            color: "#8E24AA"
        },
        {
            name: "Analytics Integration",
            icon: "https://www.svgrepo.com/show/454708/analytics-chart-earning.svg",
            color: "#00BCD4"
        },
        {
            name: "Chat / Messaging",
            icon: "https://www.svgrepo.com/show/530377/chat-chat.svg",
            color: "#1976D2"
        },
        {
        name: "Cloud Storage",
        icon: "https://www.svgrepo.com/show/475288/cloud-storage.svg",
        color: "#039BE5"
    },
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
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="me-3"
                                                style={{ width: "24px", height: "24px", color: skill.color }}
                                            />
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
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="me-3"
                                                style={{ width: "24px", height: "24px", color: skill.color }}
                                            />
                                            <span>{skill.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mb-5'>
                <div className="col-md-12">
                    <div className="card border-0 bg-dark bg-opacity-25 h-100">
                        <div className="card-body">
                            <h3 className="mb-4">API Integration</h3>
                            <div className="row g-3">
                                {integration.map((integration, index) => (
                                    <div className="col-md-4" key={index}>
                                        <div className="skill-item rounded d-flex align-items-center p-3 hover:bg-dark hover:bg-opacity-50 transition-colors">
                                            <img
                                                src={integration.icon}
                                                alt={integration.name}
                                                className="me-3"
                                                style={{ width: "24px", height: "24px", color: integration.color }}
                                            />
                                            <span>{integration.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row ">
                <div className="col-12">
                    <div className="card border-0 bg-dark bg-opacity-25">
                        <div className="card-body">
                            <h3 className="card-title mb-4">Tools</h3>
                            <div className="row g-3">
                                {tools.map((tool, index) => (
                                    <div className="col-6 col-md-3" key={index}>
                                        <div className="skill-item rounded p-3 bg-dark bg-opacity-50 text-center h-100 hover:bg-opacity-75 transition-colors">
                                            <img
                                                src={tool.icon}
                                                alt={tool.name}
                                                className="mb-2 mx-auto"
                                                style={{ width: "40px", height: "40px", color: tool.color }}
                                            />
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