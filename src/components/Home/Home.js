import React from 'react';
import { NavLink } from 'react-router-dom';

import Technologies from './Technologies';


const Home = () => {


    return (
        <div className="home">
            <div className="home-header">
            <h1><span className="cursive">DustinGuillen</span>.dev<span className="mouseIcon"></span></h1>
            <p>Software Developer based in New Mexico with a passion for learning,<br/>creativity, and making the world better through technology.</p>
            <NavLink to="/app/about/">Explore</NavLink>
            </div>
            <Technologies />
        </div>
    )
}

export default Home;