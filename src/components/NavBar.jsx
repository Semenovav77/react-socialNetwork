import React from 'react';
import './Navbar.css';

const NavBar = () => {
    return  (
        <nav className='nav'>
            <div className='item'>
                Profile
            </div>
            <div className='item'>
                Messages
            </div>
            <div className='item'>
                News
            </div>
            <div className='item'>
                Music
            </div>
            <div className='item'>
                Settings
            </div>
        </nav>
    )
}

export default NavBar;