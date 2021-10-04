import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const element = <FontAwesomeIcon icon={faCopyright} />

    return (
        <div className="footer pt-5">
            <div className="bg-secondary position-botton">
                <div className="container">
                    <div className="footer-container row">
                        <div className="">
                            <h3 >SERVICE</h3>
                            <p><Link to="#"> Upcoming course</Link></p>
                            <p><Link to="#">English spoken course </Link></p>
                            <p><Link to="#">pronunciation course</Link></p>
                            <p><Link to="#">IELTS course</Link></p>
                        </div>
                        <div>
                            <h3>USEFUL LINKS</h3>
                            <p><Link to="#">competition dashboard</Link></p>
                            <p><Link to="#">Advice</Link></p>
                            <p><Link to="#">Help</Link></p>
                            <p><Link to="#">Help</Link></p>
                        </div>
                        <div><h3>CONTACT</h3>
                            <p>Location:++0254585</p>
                            <p>Phone:++0254585</p>
                            <p>Email:ab@gmail.com</p>
                        </div>

                    </div>
                </div>
                <p className='bg-dark text-light  p-3 copyright'>{element}2020 Copyright</p>
            </div>
        </div>

    );
};

export default Footer;