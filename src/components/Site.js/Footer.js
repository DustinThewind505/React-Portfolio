import React, { Fragment } from 'react';

const Footer = props => {


    return (
        <Fragment>
            <footer>
                <div className="footer-left">
                <h5>Social Media:</h5>
                    <ul>
                        <li><a href="https://github.com/DustinThewind505" target="_blank"><img src="https://www.electronjs.org/images/apps/github-desktop-icon.png" />Github</a></li>
                        <li><a href="https://www.linkedin.com/in/dustin-guillen-269307183/" target="_blank"><img src="http://icons.iconarchive.com/icons/yootheme/social-bookmark/512/social-linkedin-box-blue-icon.png" />LinkedIn</a></li>
                        
                        <li><a href="https://codesandbox.io/u/DustinThewind505" target="_blank"><img src="https://img.stackshare.io/service/7434/Screen_20Shot_202017-08-11_20at_205.55.05_20AM.png" />CodeSandbox</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <img class="zia-img" src="https://dustinthewind505.github.io/images/zia-symbol-red-on-yellow.png" alt="New Mexico state flag" />
                    <small><span>©</span> Copyright 2020 | Dustin Guillen</small>
                </div>
            </footer>
        </Fragment>
    )
};

export default Footer;