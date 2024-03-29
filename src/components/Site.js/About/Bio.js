import React from 'react';

const Bio = () => {



    return (
        <section className="about-section-container">
            <div className="about-section">
                <div className="about-section-left">
                    <h2>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                        <span className="cursive">About</span>
                    </h2>
                    <p><strong>Dustin Guillen,<br />Web Developer, Software Engineer</strong></p>
                    <p>
                        2+ years of software engineering. I'm currently living in beautiful <span className="cursive">Albuquerque, New Mexico</span>.
                        I am interested in teams valuing quality, clean code principles, shipping with urgency, & testing.
                    </p>
                    {/* <p> My primary focus is in front-end technologies such as ReactJs, while expanding my knowledge in testing and back-end development.</p> */}
                    <p><strong><u>WILLING TO RELOCATE</u></strong></p>
                </div>
                <div className="about-section-right">
                    <h2 className="mobile-svg">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                        <span className="cursive">About</span>
                    </h2>
                    <img src="/images/About.jpeg" alt="Dustin Guillen" />
                </div>
            </div>
        </section>
    )
}

export default Bio;