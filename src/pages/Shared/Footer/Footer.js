import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer text-center'>
            <p>Copyright @ {(new Date()).getFullYear()} Design By Mainuddin Sani</p>
        </div>
    );
};

export default Footer;