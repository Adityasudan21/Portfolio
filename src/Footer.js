import React, { useState } from 'react';
import './Footer.css'; // Import CSS file

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle email submission here, e.g., send email using an API
        console.log('Email submitted:', email);
        // Clear the email field after submission
        setEmail('');
    };

    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://twitter.com/DeadCoder_1" target="_blank" rel="noopener noreferrer">
                    <i className="twitter">X(Formely Twitter)</i>
                </a>
                <a href="https://www.linkedin.com/in/aditya-sudan-linkdin/" target="_blank" rel="noopener noreferrer">
                    <i className="linkedin">LinkedIn</i>
                </a>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={handleEmailChange}
                        className="email-input"
                        required
                    />
                    <button type="submit" className="submit-button">Send</button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;
