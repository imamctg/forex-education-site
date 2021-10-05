import React from 'react';
import NavigationBar from '../Navbar/NavigationBar';
import './Header.css'


/* This is Header component part of the site also link navigarion bar from here */
const Header = () => {
    return (
        <div>
            <div className="mt-3">
                <h2 className="text-danger fw-bold">Trading Spot</h2>
                <p>World Best  Forex Trading Training in <span className="site fw-bold">Trading Spot</span></p>
            </div>
            <NavigationBar></NavigationBar>
        </div>
    );
};

export default Header;