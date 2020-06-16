import React, { Fragment } from 'react';

const Footer = props => {


    return (
        <Fragment>
            <footer>
                <div class="footer-left">
                    <img src="/images/lambda.png" alt="lambda school logo" />
                </div>
                <div class="footer-middle">
                    <img class="zia-img" src="/images/zia-symbol-red-on-yellow.png" alt="New Mexico state flag" />
                    <small>&copy; Copyright 2020 | Dustin Guillen</small>
                </div>
                <div class="footer-right">
                    <nav class="contact-links">
                        <a href="https://www.linkedin.com/in/dustin-guillen-269307183/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/linkedin.png" alt="linkedin logo" />
                        </a>
                        <a href="https://github.com/DustinThewind505" target="_blank" rel="noopener noreferrer">
                            <img src="/images/github.png" alt="github logo" />
                        </a>
                        <a href="https://codesandbox.io/u/DustinThewind505" target="_blank" rel="noopener noreferrer">
                            <img class="codesandbox-logo" src="/images/Codesandbox.png" alt="code sandbox logo" />
                        </a>
                    </nav>
                </div>
            </footer>
        </Fragment>
    )
};

export default Footer;

{/* <footer>
                <div className="footer-left">
                <h5>Social Media:</h5>
                    <ul>github logo
                        <li><a href="https://github.com/DustinThewind505" target="_blank" rel="noopener noreferrer"><img src="https://www.electronjs.org/images/apps/github-desktop-icon.png" alt="Rick and Morty App"/>Github</a></li>
                        <li><a href="https://www.linkedin.com/in/dustin-guillen-269307183/" target="_blank" rel="noopener noreferrer"><img src="http://icons.iconarchive.com/icons/yootheme/social-bookmark/512/social-linkedin-box-blue-icon.png" alt="Linkedin logo"/>LinkedIn</a></li>
                        
                        <li><a href="https://codesandbox.io/u/DustinThewind505" target="_blank" rel="noopener noreferrer"><img src="https://img.stackshare.io/service/7434/Screen_20Shot_202017-08-11_20at_205.55.05_20AM.png"alt="Codesandbox logo" />CodeSandbox</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <img class="zia-img" src="https://dustinthewind505.github.io/images/zia-symbol-red-on-yellow.png" alt="New Mexico state flag" />
                    <small><span>©</span> Copyright 2020 | Dustin Guillen</small>
                </div>
            </footer> */}