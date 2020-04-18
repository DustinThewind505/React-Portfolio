import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {


    return(
        <div className="nav-container">
            <ul>
                <li>
                   <Link to="/" className="NavLink">About</Link>
                </li>
                <li>
                   <Link to="/projects" className="NavLink">Projects</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;