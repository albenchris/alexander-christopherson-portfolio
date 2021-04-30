import React from 'react';
import github from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg';
import stackOverflow from '../../assets/images/stackoverflow.svg';

const Footer = () => {

    return (
        <footer>
            <a
                href="https://github.com/albenchris"
                target="_blank"
                rel="norefferer"
            >
                <img className="logo" src={github} />
            </a>

            <a
                href="https://www.linkedin.com/in/alexander-christopherson-2b32085a/"
                target="_blank"
                rel="norefferer"
            >
                <img className="logo" src={linkedin} />
            </a>

            <a
                href="https://stackoverflow.com/users/14658140/alexander-christopherson"
                target="_blank"
                rel="norefferer"
            >
                <img className="logo" src={stackOverflow} />
            </a>
        </footer>
    );
}

export default Footer;