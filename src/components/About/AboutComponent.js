import React, { Fragment } from 'react';

import Bio from './Bio';
import Technologies from './Technologies';
import Card from './Card';

const AboutComponent = () => {



    return (
        <Fragment>
            <Bio />
            <Technologies />
            <Card />
        </Fragment>
    )
}

export default AboutComponent;