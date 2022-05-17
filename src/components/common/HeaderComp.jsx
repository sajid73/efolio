import React, { useState } from 'react';

const HeaderComp = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 50) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <nav id="navigation" className={`navbar navbar-expand-lg navbar-light fixed-top text-dark ${colorChange ? 'navbar-color' : 'bg-transparent'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={require('../../images/logo.png')} alt="Efolio logo" width="150px" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-2 mb-2 mb-lg-0 fs-5">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutus">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Forum</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default HeaderComp;