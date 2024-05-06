import React from 'react';
import { NavLink } from 'react-router-dom';


const Home = () => {


    return (
        <div className="home">
            <div className="home-header">
                <div>
                    <h1><span className="cursive">DustinGuillen</span>.dev</h1>
                </div>
                <p>Web Developer passionate about web apps and writing clean code.</p>
                <NavLink to="/about">Explore</NavLink>
            </div>
        </div>
    )
}

export default Home;