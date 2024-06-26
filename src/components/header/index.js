import React, { Fragment } from 'react';

import Navigation from './components/navigation'

const Header = props => {

    return (
        <Fragment>
            <div className="App-header">
                <h1><span className="cursive">DustinGuillen</span>.dev<span className="mouseIcon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mouse" class="svg-inline--fa fa-mouse fa-w-12 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M0 352a160 160 0 0 0 160 160h64a160 160 0 0 0 160-160V224H0zM176 0h-16A160 160 0 0 0 0 160v32h176zm48 0h-16v192h176v-32A160 160 0 0 0 224 0z"></path></svg></span></h1>
                <p>Creative. Responsive. Clean Code.</p>             
            </div>
            <Navigation />
        </Fragment>
    )
};

export default Header;
