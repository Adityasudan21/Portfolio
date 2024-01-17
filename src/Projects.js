import React, { useState, useEffect } from 'react';
import "./Projects.css";
import InfoIcon from '@mui/icons-material/Info';
function Projects() {
    const [showFirstImage, setShowFirstImage] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShowFirstImage((prev) => !prev);
        }, 3000); // Change the interval time as needed

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className='projects'>
            <div className="heading_projects">
                <h4>Projects</h4>
            </div>
            <div className="project1">
                <div className="connect-turret-image">
                    <img className={`connect-turret-image-transition ${showFirstImage ? 'first' : 'second'}`}
                        src={showFirstImage ? "https://i.ibb.co/p37vTFC/Screenshot-2024-01-18-004739.png" : "https://i.ibb.co/6DHBMws/Screenshot-2024-01-18-004819.png"} alt="Front Image" />

                </div>
                <div className="connect-turret-description">
                    <h4>
                        Connect-Turret App
                    </h4>
                    <div className='info'>
                        <InfoIcon /><span>Developed a LinkedIn-inspired  web application using React for the frontend.</span>
                    </div>
                    <div className='info'>
                        <InfoIcon /><span>Implemented backend services with Firebase, incorporating Authentication, Firestore, and Cloud Functions.</span>
                    </div>
                    <div className='info'>
                        <InfoIcon /><span>Integrated Firebase Authentication for secure user sign-up, login, and session management.</span>
                    </div>
                    <div className='info'>
                        <InfoIcon /><span>Incorporated real-time features to facilitate seamless connections and chat functionality.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects