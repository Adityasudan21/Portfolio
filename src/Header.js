import React from 'react'
import "./Header.css";
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import GetAppIcon from '@mui/icons-material/GetApp';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));
function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar alt="Aditya Sudan" src="https://i.ibb.co/0cF9z8Z/Aditya-Sudan.jpg" sx={{ width: 50, height: 50 }} />
                </StyledBadge>
            </div>
            <div className="header_right">
                <h6 className='bookmark'> My Work</h6>
                <h6 className='bookmark'>About Me</h6>
                <h6 className='bookmark contact'>Contact</h6>
                <div className="resume">
                    <GetAppIcon sx={{ width: 20, height: 20 }}/>
                    <h6 className='bookmark'>Resume</h6>
                </div>

            </div>
        </div>
    )
}

export default Header