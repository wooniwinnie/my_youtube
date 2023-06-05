import React from 'react';
import Navbar from './Navbar';
import Subnavbar from './Subnavbar';

type Props = {};

const Header = (props: Props) => {
    return (
        <>
            <Navbar />
            <Subnavbar />
        </>
    );
};

export default Header;
