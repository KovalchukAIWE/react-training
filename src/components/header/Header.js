import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class='header-sticky'>
            <nav class='navigation'>
                <ul class='navigation-items'>
                    <Link to='/' class='items'>Home</Link>
                    <Link to='/our-mission' class='items'>Our mission</Link>
                    <Link to='/team-squares' class='items'>Team squares</Link>
                    <Link to='/cover-primary' class='items'>Cover primary</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;