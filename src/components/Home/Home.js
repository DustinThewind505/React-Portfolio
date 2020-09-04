import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Site.js/Footer';

//import Technologies from './Technologies';
//import Navigation from '../Site.js/Navigation'


const Home = () => {


    return (
        <Fragment>
            <div className="home">
                <div className="home-header">
                    <div>
                        <h1><span className="cursive">DustinGuillen</span>.dev</h1>
                    </div>
                    <p>Web Developer passionate about Pixel Perfect Design, Web Apps, and writing Clean code.</p>
                    <NavLink to="/app/about/">Explore</NavLink>
                </div>
                {/* <Technologies /> */}
            </div>
            {/* <Navigation /> */}
            <Footer />
        </Fragment>
    )
}

export default Home;