import React from 'react';
import photo from './assets/images/alexander-pic.png'
import './assets/css/style.css'

const About = () => {

    return (
        <section>
            <h2 id="about">
                About Me
            </h2>
            <div className="about-content">
                <div className="pic-container">
                    <img className="bio-pic" src={photo} alt="Alex adjusting his tie" />
                </div>
                <p className="bio-text">
                    I'm a full stack developer in Milwaukee, WI.
                    I have an eye for detail that helps me keep organized and debug easily.
                    As a "jack of all trades, master of none", I can adapt and learn something new, quickly.
                </p>
            </div>
        </section>
    );
}

export default About;
