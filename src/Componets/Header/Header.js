import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/aboute">Aboute</Link>
                <Link to="/service">Service</Link>
                <Link to="/compititon">Compitation</Link>
            </nav>
        </div>
    );
};

export default Header;