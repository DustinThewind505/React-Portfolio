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
                    <p>
                        <strong>Dustin Guillen,<br/>Web Engineer and Avid Learner</strong>
                        <br/>
                        <br/>
                        I'm currently attending <span className="cursive">Lambda School</span>  in beautiful Albuquerque, New Mexico. My primary focus is in front-end technologies such as ReactJs, while expanding my knowledge in testing and back-end development.
                        <br/>
                        <br/>
                        <strong>WILLING TO RELOCATE</strong>
                </p>
                </div>
                <div className="about-section-right">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQGCMiHGoXykXg/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=e69eZFEYhyVGEfs44BKlY6l56YKmFWqR3CPEAr-LQrY" alt="Dustin Guillen" />
                </div>
            </div>
        </section>
    )
}

export default Bio;