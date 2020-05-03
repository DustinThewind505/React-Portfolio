import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import About from './About/AboutComponent';
import Projects from './Projects/ProjectsComponent';
import Footer from './Footer';

const Site = () => {



    return (
        <div>
            <Header />
            <Route path="/app/about" component={About} />
            <Route path="/app/projects" component={Projects} />
            <Footer />
        </div>
    )
}

export default Site;