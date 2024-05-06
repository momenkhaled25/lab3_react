import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/about');
    }

    return (
        <div>
            contact Us
            <button className='btn btn-primary' onClick={handleNavigation}>Go To AboutUs</button>
        </div>
    )
}

export default Contact;
