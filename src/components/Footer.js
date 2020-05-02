import React, { Fragment } from 'react';

const Footer = props => {


    return (
        <Fragment>
            <footer>
                <div className="footer-left">
                    <ul>
                        <h5>Social Media:</h5>
                        <li><a href="https://www.linkedin.com/in/dustin-guillen-269307183/"><img src="http://icons.iconarchive.com/icons/yootheme/social-bookmark/512/social-linkedin-box-blue-icon.png" className="soap-logo"/>LinkedIn</a></li>
                        <li><a href="https://github.com/DustinThewind505"><img src="https://www.electronjs.org/images/apps/github-desktop-icon.png" className="soap-logo"/>Github</a></li>
                        <li><a href="https://codesandbox.io/u/DustinThewind505">CodeSandbox</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <img class="zia-img" src="https://dustinthewind505.github.io/images/zia-symbol-red-on-yellow.png" alt="New Mexico state flag" />
                    <small><span className="soap-logo">©</span> Copyright 2020 | Dustin Guillen</small>
                </div>
            </footer>
        </Fragment>
    )
};

export default Footer;