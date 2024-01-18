import React from 'react'
import "./AboutMe.css";
import Avatar from '@mui/material/Avatar';
function AboutMe() {
    return (
        <div className='aboutme'>
            <h4>About Me</h4>

            <div className='main_aboutme'>
                <div className="avatar_aboutme">
                    <Avatar title="Aditya Sudan" alt="Aditya Sudan" src="https://i.ibb.co/0cF9z8Z/Aditya-Sudan.jpg" sx={{ width: 225, height: 225 }} />
                </div>
                <div className="description_aboutme">
                    <p>
                        Hey, Aditya here.👋I'm a web developer and a web designer. I love helping people thrive online with memorable web design
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe