import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/'>home</Link>
            <Link to='/login'>login</Link>
            <Link to='/register'>register</Link>
            <Link to='/register-rbs'>register Rbs</Link>
        </nav>
    );
};

export default Header;