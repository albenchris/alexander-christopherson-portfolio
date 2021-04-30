import React from 'react';
import Nav from '../Nav';
import './assets/css/style.css';

const Header = () => {

    return (
        <header>
            <div>
                <a className="my-name" data-testid="link" href="/">
                    Alexander Christopherson
                </a>
            </div>
            <Nav />
        </header>
    );
}

export default Header;
