import React, { Fragment } from 'react';

const Footer = props => {


    return (
        <Fragment>
            <footer>
                <div class="footer-left">
                    <img src="https://lambdaschool.tfaforms.net/forms/get_image/1/3OsumlnEUvKTwzAGnzIRDXHUF4cD6qlibyGJnbjjS1KN0qTHzGbPmC0LLOeOF8Q0-BIT_Logo_Stacked2.png" alt="lambda school logo" />
                </div>
                <div class="footer-middle">
                    <img class="zia-img" src="/images/zia-symbol-red-on-yellow.png" alt="New Mexico state flag" />
                    <small>&copy;reated by Dustin Guillen | 2023</small>
                </div>
                <div class="footer-right">
                    <nav class="contact-links">
                        <a href="https://www.linkedin.com/in/dustin-guillen-269307183/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/linkedin.png" alt="linkedin logo" />
                        </a>
                        <a href="https://github.com/DustinThewind505" target="_blank" rel="noopener noreferrer">
                            <img src="/images/github.png" alt="github logo" />
                        </a>
                        <a href="https://codesandbox.io/u/DustinThewind505" className="codesandbox-logo" target="_blank" rel="noopener noreferrer">
                            <img id="codesandbox-logo" src="/images/Codesandbox.png" alt="code sandbox logo" />
                        </a>
                    </nav>
                </div>
            </footer>
        </Fragment>
    )
};

export default Footer;
