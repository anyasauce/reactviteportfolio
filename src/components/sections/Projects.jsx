import { useState } from 'react';
import BoardingHouseImage from '../../assets/projects_images/boardinghouse.png';
import CodeWebTechImage from '../../assets/projects_images/codewebtech.png';
import ReservationImage from '../../assets/projects_images/reservation.png';
import WebImage from '../../assets/projects_images/web.png';
import IbarraImage from '../../assets/projects_images/ibarra.png';
import JbImage from '../../assets/projects_images/jb.png';
import AttendanceImage from '../../assets/projects_images/attendance.png';
import AttendanceFormImage from '../../assets/projects_images/attendanceform.png';
import PhusmsImage from '../../assets/projects_images/phusms.png';
import CoffeeImage from '../../assets/projects_images/coffee.png';
import WaterImage from '../../assets/projects_images/water.png';
import FeedbackImage from '../../assets/projects_images/feedback.png';
import IdImage from '../../assets/projects_images/id.png';
import RfidImage from '../../assets/projects_images/rfid.png';
import SdmsImage from '../../assets/projects_images/sdms.png';
import CalculatorImage from '../../assets/projects_images/calculator.png';
import Rizal from '../../assets/projects_images/rizal.png';
import Hotel from '../../assets/projects_images/hotel.png';
import SarapExpress from '../../assets/projects_images/sarapexpress.png';
import TheDailyGrind from '../../assets/projects_images/thedailygrind.png';
import CodeWeb from '../../assets/projects_images/codeweb.png';
import Giveaway from '../../assets/projects_images/giveaway.png';
import CoffeeWeb from '../../assets/projects_images/design.png';
import Bmi from '../../assets/projects_images/bmi.png';
import Color from '../../assets/projects_images/colorpalette.png';
import Login from '../../assets/projects_images/modernlogin.png';
import Starter from '../../assets/projects_images/starter.png';
import Template from '../../assets/projects_images/template.png';
import OldPortfolio from '../../assets/projects_images/oldportfolio.png';
import CountDown from '../../assets/projects_images/countdown.png';
import PhotoBooth from '../../assets/projects_images/photobooth.png';
import Bday from '../../assets/projects_images/bday.png';
import smsportal from '../../assets/projects_images/smsportal.png';
import IdeaHub from '../../assets/projects_images/ideahub.png';
import Reyven from '../../assets/projects_images/reyven.png';
import RFIDAttendance from '../../assets/projects_images/rfidattendance.png';

function Projects() {
    const projects = [
        {
            title: "RFID Attendance Monitoring System",
            description: "A comprehensive RFID-based system designed to monitor student/office attendance efficiently, featuring real-time tracking, secure account management.",
            technologies: ["Laravel", "Blade Template", "Tailwind CSS", "jQuery", "JavaScript"],
            image: RFIDAttendance,
            github: "#",
            demo: ""
        },
        {
            title: "Student Portal with E-Wallet",
            description: "An all-in-one platform for students to manage their accounts, make secure e-wallet transactions, and track transactions availability in real-time.",
            technologies: ["Laravel", "Blade Template", "Tailwind CSS", "jQuery", "JavaScript"],
            image: smsportal,
            github: "#",
            demo: ""
        },
        {
            title: "Boarding House Management System",
            description: "A system to manage tenants, payments, and room availability efficiently.",
            technologies: ["Laravel", "Blade Template", "Bootstrap 5", "jQuery", "JavaScript", "CSS"],
            image: BoardingHouseImage,
            github: "#",
            demo: "https://bhms.laravel.cloud/"
        },
        {
            title: "The Daily Grind E-Commerce Mini Capstone System",
            description: "An e-commerce platform for selling products and managing transactions.",
            technologies: ["PHP", "Bootstrap 5", "JavaScript", "HTML", "CSS"],
            image: TheDailyGrind,
            github: "#",
            demo: "#"
        },
        {
            title: "CapstoneIdeaHub",
            description: "A countdown timer that dynamically displays the time remaining until the New Year.",
            technologies: ["HTML", "Bootstrap 5", "JavaScript", "CSS"],
            image: IdeaHub,
            github: "#",
            demo: "https://capstoneideahub.vercel.app/"
        },
        {
            title: "Photo Booth",
            description: "A countdown timer that dynamically displays the time remaining until the New Year.",
            technologies: ["React.js", "Bootstrap 5", "JavaScript", "CSS"],
            image: PhotoBooth,
            github: "#",
            demo: "https://snapspotphotobooth.vercel.app/"
        },
        {
            title: "Bday Card",
            description: "A countdown timer that dynamically displays the time remaining until the New Year.",
            technologies: ["HTML", "Bootstrap 5", "JavaScript", "CSS"],
            image: Bday,
            github: "#",
            demo: "https://kynes19th.vercel.app/"
        },
        {
            title: "Website Portfolio",
            description: "A website Portfolio from my Client",
            technologies: ["HTML", "CSS"],
            image: Reyven,
            github: "#",
            demo: "https://reyvenqqfff.github.io/reyvenlumanao/"
        },
        {
            title: "New Year Countdown",
            description: "A countdown timer that dynamically displays the time remaining until the New Year.",
            technologies: ["React.js", "Bootstrap 5", "JavaScript", "CSS"],
            image: CountDown,
            github: "#",
            demo: "https://countdown-react-app-one.vercel.app/"
        },
        {
            title: "BMI Calculator",
            description: "A simple tool to calculate Body Mass Index based on user height and weight inputs.",
            technologies: ["HTML", "Bootstrap 5", "JavaScript", "CSS"],
            image: Bmi,
            github: "#",
            demo: "https://bmicalculator-ebon.vercel.app"
        },
        {
            title: "Color Palette Extractor",
            description: "An app that extracts a color palette from uploaded images to help with design and inspiration.",
            technologies: ["React.JS", "Bootstrap 5", "JavaScript", "CSS"],
            image: Color,
            github: "#",
            demo: "https://nightshadepalette.vercel.app/"
        },
        {
            title: "Modern Login Page",
            description: "An app that extracts a color palette from uploaded images to help with design and inspiration.",
            technologies: ["HTML", "Bootstrap 5", "JavaScript", "CSS", "AOS", "SweetALert2"],
            image: Login,
            github: "#",
            demo: "https://modernauthentication.vercel.app/"
        },
        {
            title: "Front End Starter Template",
            description: "A responsive and reusable front-end starter template with modern UI components and animations.",
            technologies: ["HTML", "Bootstrap 5", "JavaScript", "CSS", "AOS", "SweetALert2"],
            image: Starter,
            github: "#",
            demo: "https://josiahstarterkit.vercel.app/"
        },
        {
            title: "Old Portfolio",
            description: "A responsive and reusable front-end starter template with modern UI components and animations.",
            technologies: ["HTML", "Bootstrap 5", "JavaScript", "CSS", "AOS", "SweetALert2"],
            image: OldPortfolio,
            github: "#",
            demo: "https://codewithjosh.vercel.app/"
        },
        {
            title: "Portfolio Free Template",
            description: "A responsive and reusable front-end starter template with modern UI components and animations.",
            technologies: ["HTML", "Bootstrap 5", "JavaScript", "CSS", "AOS", "SweetALert2"],
            image: Template,
            github: "#",
            demo: "https://flexdash-codewithjosh.vercel.app/"
        },
        {
            title: "Hotel Reservation System",
            description: "A system for booking and managing hotel reservations online.",
            technologies: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "PHP"],
            image: Hotel,
            github: "#",
            demo: "#"
        },
        {
            title: "Sarap Express (Frontend Only Design)",
            description: "A modern and interactive frontend design for a food delivery service.",
            technologies: ["React.js", "Bootstrap 5", "AOS", "CSS"],
            image: SarapExpress,
            github: "#",
            demo: "#"
        },
        {
            title: "ITSD ID Reservation System",
            description: "A system designed to efficiently handle and manage ID reservations for users.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: ReservationImage,
            github: "#",
            demo: "#"
        },
        {
            title: "Rizal Ibarra Profiling System",
            description: "An efficient profiling system for Rizal's data that centralizes and manages personal information.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: IbarraImage,
            github: "#",
            demo: "#"
        },
        {
            title: "Rizal Ibarra Profiling System",
            description: "An efficient profiling system for Rizal's data that centralizes and manages personal information.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: Rizal,
            github: "#",
            demo: "#"
        },
        {
            title: "Roblox Jailbreak System",
            description: "A system for managing Roblox Jailbreak players' data.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: JbImage,
            github: "#",
            demo: "#"
        },
        {
            title: "Attendance System",
            description: "Tracks and manages attendance records efficiently.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: AttendanceImage,
            github: "#",
            demo: "#"
        },
        {
            title: "Attendance Form System",
            description: "Simplifies attendance submission through an online form.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: AttendanceFormImage,
            github: "#",
            demo: "#"
        },
        {
            title: "Phinma UI Student Management System",
            description: "Manages student records and information for efficiency.",
            technologies: ["Python Flask", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: PhusmsImage,
            github: "#",
            demo: "#"
        },
        {
            title: "Coffee Shop System",
            description: "Handles orders and inventory for coffee shop operations.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: CoffeeImage,
            github: "#",
            demo: "#"
        },
        {
            title: "Water Refilling System",
            description: "Efficiently manages water refilling service requests.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: WaterImage,
            github: "#",
            demo: "#"
        },
        {
            title: "Feedback Form System",
            description: "Collects and organizes user feedback efficiently.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: FeedbackImage,
            github: "#",
            demo: "#"
        },
        {
            title: "ID Generator System",
            description: "Generates unique IDs for various applications.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: IdImage,
            github: "#",
            demo: "#"
        },
        {
            title: "RFID System",
            description: "Manages RFID-based attendance and tracking system.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: RfidImage,
            github: "#",
            demo: "#"
        },
        {
            title: "E-Commerce System",
            description: "Facilitates online shopping and transaction management.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: CodeWeb,
            github: "#",
            demo: "#"
        },
        {
            title: "SDMS Student Management System",
            description: "Comprehensive system for managing student information.",
            technologies: ["PHP Vanilla", "MySQL", "Bootstrap", "JavaScript", "CSS"],
            image: SdmsImage,
            github: "#",
            demo: "#"
        },
        {
            title: "Coffee Shop Web Design",
            description: "Frontend design for a coffee shop website.",
            technologies: ["HTML", "CSS"],
            image: CoffeeWeb,
            github: "#",
            demo: "#"
        },
        {
            title: "Good Student Web Design",
            description: "Frontend design showcasing student achievements.",
            technologies: ["HTML", "CSS"],
            image: WebImage,
            github: "#",
            demo: "#"
        },
        {
            title: "IOS Calculator Web Design",
            description: "Functional calculator with iOS-style design.",
            technologies: ["HTML", "JavaScript", "CSS"],
            image: CalculatorImage,
            github: "#",
            demo: "#"
        },
        {
            title: "E-Commerce Web Design",
            description: "Frontend design for an e-commerce platform.",
            technologies: ["HTML", "Bootstrap", "JavaScript", "CSS"],
            image: CodeWebTechImage,
            github: "#",
            demo: "#"
        },
        {
            title: "Giveaway System",
            description: "System for managing giveaway entries and winners.",
            technologies: ["HTML", "PHP Vanilla", "JavaScript", "CSS"],
            image: Giveaway,
            github: "#",
            demo: "#"
        }
    ];

    const handleLinkClick = (linkType, link) => {
        if (link === "#") {
            alert(`No ${linkType} link provided.`);
        }
    };

    const [selectedImage, setSelectedImage] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');

    const openModal = (img, title) => {
        setSelectedImage(img);
        setSelectedTitle(title);
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
    };

    return (
        <section className="py-5">
            <h2 className="section-title">My Projects</h2>
            <p className="mb-5">Here are some of the projects I've worked on. Each represents different skills and technologies I've mastered.</p>

            <div className="row g-4">
                {projects.map(project => (
                    <div className="col-md-6" key={project.id}>
                        <div className="card project-card h-100 border-0 bg-dark bg-opacity-25">
                            <img
                                src={project.image}
                                className="card-img-top"
                                alt={project.title}
                                style={{ cursor: 'pointer' }}
                                onClick={() => openModal(project.image, project.title)}
                            />
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
                                    <a
                                        href={project.github}
                                        className="btn btn-sm btn-outline-primary"
                                        onClick={(e) => {
                                            if (project.github === "#") {
                                                e.preventDefault();
                                                handleLinkClick("GitHub", project.github);
                                            }
                                        }}
                                    >
                                        <i className="bi bi-github me-1"></i> Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="btn btn-sm btn-primary"
                                        onClick={(e) => {
                                            if (project.demo === "#") {
                                                e.preventDefault();
                                                handleLinkClick("Demo", project.demo);
                                            }
                                        }}
                                    >
                                        <i className="bi bi-eye me-1"></i> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="modal fade" id="imageModal" tabIndex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content bg-dark text-white">
                        <div className="modal-header border-0">
                            <h5 className="modal-title" id="imageModalLabel">{selectedTitle}</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            <img src={selectedImage} alt="Preview" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;