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
                    <h1><span className="cursive">DustinGuillen</span>.dev<span className="mouseIcon"></span></h1>
                    <p>Web Developer passionate about Pixel Perfect Design, making Scalable Sites, and writing Clean code.</p>
                    <NavLink to="/app/about/">Explore</NavLink>
                </div>
                {/* <Technologies /> */}
            </div>
            {/* <Navigation /> */}
            <Footer/>
        </Fragment>
    )
}

export default Home;