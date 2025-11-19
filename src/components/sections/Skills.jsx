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
            icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
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
            name: "Postman",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
            color: "#FF6C37"
        },
        {
            name: "Render",
            icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/render.svg",
            color: "#46E3B7"
        },
        {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            color: "#2496ED"
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

    const mobileAppDevelopment = [
        {
            name: "React Native",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            color: "#61DAFB"
        },
        {
            name: "NativeWind",
            icon: "https://www.svgrepo.com/show/374146/typescript-official.svg",
            color: "#06B6D4"
        },
        {
            name: "Laravel Backend",
            icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
            color: "#FF2D20"
        },
        {
            name: "Express.js Backend",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            color: "#000000"
        },
        {
            name: "Expo",
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAXVBMVEVHcEwLDhMKDhMLDxMKDhMKDhQHDw8LDw8LDhIKDhIKDxIMDxMKDhMLDhMPDw8JDRELDhMKDhIKDxULDhIJDA8KDRIMDhMKDhILDxMLDxIKDhILDxEJDRMHCxMLDxRJ+fFnAAAAH3RSTlMAn+//j38gQM+/YFDf3xCAoO8w31BfkN9AcK+AgEBwIYLNDwAAAMVJREFUeAGt0MsWQzAUheHNIe1BkWpLr+//mLVErE1i1H5Dg33kx58lqUiaYVcukww7jMwOiDvKTBFVyKJETCWLUx39Q9IgYCohaTjRykq290RrxTnHBzpjbPSpF3GuQEm1gicmGN0iE4U/gFHd+zUe4E9DUCunA/THDTXyB5zarmu1wc27n+BGDxB1E4YHDMicK6GBJxhevpYf6MCWGAq8ZTJgY/ATygmYK67gBMzHgG4SbGLodEsRpe7xRc8HmOntB7/7AmhdCQtgyt3wAAAAAElFTkSuQmCC",
            color: "#000020"
        },
        {
            name: "React Navigation",
            icon: "https://reactnavigation.org/img/spiro.svg",
            color: "#6B46C1"
        }
    ];

    const webHosting = [
        {
            name: "GitHub Pages",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            color: "#181717"
        },
        {
            name: "Vercel",
            icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
            color: "#000000"
        },
        {
            name: "Render",
            icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/render.svg",
            color: "#46E3B7"
        },
        {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            color: "#2496ED"
        },
        {
            name: "Nginx",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
            color: "#009639"
        },
        {
            name: "Ngrok",
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAARVBMVEUCI48AAIUAGYwAFIv////29/wAAIJUYKfn6fJ6grcNKZGyttTv8PZmb67BxNyssdC0udbd3+z4+PsABYni5O8AH44cM5WwOgziAAAAVklEQVR4Ad2JhRHAMAzEGqYy7T9qw7xAKtOfNQ0JMEwQGFDtsIZQZg4XoCcldijQkTP2LLCRiRW0clNK7SYcrTzpdYHJpLsj9et5fyFJK701mPD4NB4f07AF1Bwc3XUAAAAASUVORK5CYII=",
            color: "#1F1E37"
        },
        {
            name: "Hostinger",
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADQ0lEQVRYhe3XX4hVVRTH8c++o/gHs0joobAwil56aA6BhIgknKtSDwVSRhDWU1HnWkQQRBERhEZIcwyiqLEgsgkSQUzvfYigt+CM4EshPmhBBQb2zwqdWT2cmXFmmvHe8dpD0Q82l8tZe+8va6+119oJdjRHF49H7MK32Ft2sh/1oSKvbsHL+EBypGxnv89n24AkBW7ATowUebW11Rxd0QdDA+vxnjBc5NXGIh9dMi/ANA1gI96PiA+LvNrcao4u7QNkJe7HJ8TeIq/unA0yG2BSy3A3RiJiuMirO1qbR1MfIFdiG/YTw0Vere0GMKkrJibuNK6fI5kO8gCe3pFXA70ATGrpAmx70SKkhQD8Y/ofYCEAsQDbMziG8W6Gi3pccGVEbCjy6jd18MRkTs6iGsNXZSf7rsirB7Edj2JNvwA3Y2T6fvO4I3CsyKs3EgeGOtmuIq8OolCn81WzJ/R6BA11Ki7rMpZjLd4OPi7y6q7ECSkV2IpP1ccydan16oGFagmaWBccElFK6XPiS2EbVscExARABH7ANzh/GUGS2iNrRHxEGi47g2+1mtXyyX2mXNHKq1VqF45bWMT3ogZScLrszCzNMwpMseVoMjZ+nbBKHdHTYWLaoM6EiMn/6cL3hJCCCDFjfpoYZ8tOdnoKYMemoykiBobag+eLZnWr8AS2YMUEyIyN+/gNdck/1Egef72djdUxEDEQEa0ir44Lh/EUjqCFdVg8l1/70DViejGqGddjH97ETWUn24978RgqPdxql6Lp90Cog/ARHCzy6jksKzvZO6luTp7F1/i1h3FWj4G8iFmRWOt6vIR7irzaLTlQtrNXi7wawbVd1hzHjdiDq3sCqG/3v31r4Ha8G2Fva9Pok0NHBk/iZLdFi7z6Cee62U1uYk4fXNASZMKcXe086rl//Ff1A/9hgFSH4JnLuO6f+LlngN3t28bwIl7ACX0Wo5TSSfV9sg+/dAWAspOdUj8ot+AVnLpUgKH24FjZyb6QPIz7cBBzPlBnxEDZyaLsZMcbKT0/AfIavr9UkLKd/VF2ssOpfg09hM/UxW0qTS+ar0VzdEDEWmxIKe0Zag9e1J3dVNQ9x3asTjwz1MnO/QXuPSVk6ZNl+gAAAABJRU5ErkJggg==",
            color: "#673DE6"
        },
        {
            name: "AWS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
            color: "#FF9900"
        },
        {
            name: "Netlify",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
            color: "#00C7B7"
        },
        {
            name: "Heroku",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
            color: "#430098"
        },
        {
            name: "DigitalOcean",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
            color: "#0080FF"
        },
        {
            name: "Firebase Hosting",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            color: "#FFCA28"
        }
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

            <div className="row mb-5">
                <div className="col-md-6 mb-4 mb-md-0">
                    <div className="card border-0 bg-dark bg-opacity-25 h-100">
                        <div className="card-body">
                            <h3 className="mb-4">Mobile Application Development</h3>
                            <div className="row g-3">
                                {mobileAppDevelopment.map((skill, index) => (
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
                            <h3 className="mb-4">Web Hosting Services</h3>
                            <div className="row g-3">
                                {webHosting.map((hosting, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="skill-item rounded d-flex align-items-center p-3 hover:bg-dark hover:bg-opacity-50 transition-colors">
                                            <img
                                                src={hosting.icon}
                                                alt={hosting.name}
                                                className="me-3"
                                                style={{ width: "24px", height: "24px", color: hosting.color }}
                                            />
                                            <span>{hosting.name}</span>
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