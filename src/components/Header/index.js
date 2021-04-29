import React from 'react';
import Nav from '../Nav';

const Header = () => {

    return (
        <header>
            <h1>
                <a data-testid="link" href="/">
                    Alexander Christopherson
                </a>
            </h1>
            <Nav />
        </header>
    );
}

export default Header;
