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
                    <p>Software Engineer in New Mexico with a passion for learning, creativity, and making the world better through technology.</p>
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