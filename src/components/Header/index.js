import React from 'react';
import Nav from '../Nav';
import './assets/css/style.css';

const Header = ({ currentPage, handlePageChange }) => {

    return (
        <header>
            <div>
                <a className="my-name" data-testid="link" href="/">
                    Alexander Christopherson
                </a>
            </div>
            <Nav
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
        </header>
    );
}

export default Header;
