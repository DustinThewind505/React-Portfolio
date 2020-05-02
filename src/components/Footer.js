import React, { Fragment } from 'react';

const Footer = props => {


    return (
        <Fragment>
            <footer>
                <div className="footer-left">
                    <ul>
                        <h5>Social Media:</h5>
                        <li><img src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c528.png"/><a href="https://www.linkedin.com/in/dustin-guillen-269307183/">LinkedIn</a></li>
                        <li><a href="https://github.com/DustinThewind505"><img src="https://www.electronjs.org/images/apps/github-desktop-icon.png"/>Github</a></li>
                        <li><a href="https://codesandbox.io/u/DustinThewind505">CodeSandbox</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <img class="zia-img" src="https://dustinthewind505.github.io/images/zia-symbol-red-on-yellow.png" alt="New Mexico state flag" />
                    <small>© Copyright 2020 | Dustin Guillen</small>
                </div>
            </footer>
        </Fragment>
    )
};

export default Footer;