import React from 'react';

const ProjectsComponent = () => {


    return (
        <section class="project-section">
            <div class="projects">
                <a href="https://codesandbox.io/s/rick-and-morty-api-9zoix" rel="noopener noreferrer" target="_blank">
                    <img src="/images/Sreenshot1.png" alt="Rick and Morty app" />
                </a>
                <h2>Rick & Morty API</h2>
                <p>HTML, CSS, React</p>

                <p>Single Page Application with Client-Side Routing. This application consumes a 3rd party API based on the TV
          show Rick and Morty. It uses React Router and React forms.</p>
            </div>

            <div class="projects">
                <a href="https://codesandbox.io/s/avengers-spa-e9m2x" rel="noopener noreferrer" target="_blank">
                    <img src="/images/Screenshot2.jpg" alt="Marvel Avengers app" />
                </a>
                <h2>Avengers React SPA</h2>
                <p>HTML, CSS, React</p>

                <p>Single Page Application with Client-Side Routing. This application passes data to components rendered by
          React Router. It uses nested routes to display sub-nav views </p>
            </div>

            <div class="projects">
                <a href="https://codesandbox.io/s/form-practice-4132020-t248m" rel="noopener noreferrer" target="_blank">
                    <img src="/images/Screenshot3.png" alt="To do list" />
                </a>
                <h2>To Do List</h2>
                <p>HTML, CSS, React</p>

                <p>React App made using stateful class components. This application adds and filters objects from state. It is a classic To Do App.<br />🎨👌😂</p>
            </div>

            <div class="projects">
                <a href="https://e9m2x.csb.app/" rel="noopener noreferrer" target="_blank">
                    <img src="/images/Screenshot3.png" alt="To do list" />
                </a>
                <h2>To Do List</h2>
                <p>HTML, CSS, React</p>

                <p>React App made using stateful class components. This application adds and filters objects from state. It is a classic To Do App.<br />🎨👌😂</p>
            </div>

        </section>
    )
}

export default ProjectsComponent;