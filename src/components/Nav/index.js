import React from 'react';
import './assets/css/style.css';

const Nav = () => {

    return (
        <nav>
            <div className="nav-container">
                <div className="nav-link">
                    <a href="#about">
                        About
                    </a>
                </div>
                <div className="nav-link">
                    <a href="#projects">
                        Projects
                    </a>
                </div>
                <div className="nav-link">
                    <a href="#contact">
                        Contact
                    </a>
                </div>
                <div className="nav-link">
                    <a href="#resume">
                        Résumé
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
