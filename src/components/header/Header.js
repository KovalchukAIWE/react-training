import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class='header-sticky'>
            <nav class='navigation'>
                <ul class='navigation-items'>
                    <Link to='/bg' class='items'>Home</Link>
                    <Link to='/bg-different' class='items'>BG different</Link>
                    <Link to='/bg-primary' class='items'>BG primary</Link>
                    <Link to='/bg-light' class='items'>BG light</Link>
                    <Link to='/our-mission' class='items'>Our mission</Link>
                    <Link to='/team' class='items'>Team</Link>
                    <Link to='/cover-primary' class='items'>Cover primary</Link>
                    <Link to='/cover-alt' class='items'>Cover alt</Link>
                    <Link to='/cover' class='items'>Cover</Link>
                    <Link to='/market-strategy' class='items'>Marketing</Link>
                    <Link to='/competitive' class='items'>Competitive</Link>
                    <Link to='/target-customer' class='items'>Customer</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;