import React from 'react';
import photo from '../../assets/images/alexander-pic.png'

const About = () => {

    return (
        <section>
            <h2 id="about">
                About Me
            </h2>
            <img src={photo} />
            <p>
                I'm a full stack developer in Milwaukee, WI.
                I have an eye for detail that helps me keep organized and debug easily.
                As a "jack of all trades, master of none", I can adapt and learn something new, quickly.
            </p>
        </section>
    );
}

export default About;
