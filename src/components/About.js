import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/About.css';

export default function About() {
    return (
        <section id="home-about-section"
            class="main-section  d-flex flex-column justify-content-center align-items-center">
            <div class="container">
                <h2 class="pt-5 text-center section-title" id="about-title">About Me</h2>
                <div id="about-me-container">
                    <div id="about-text-container">
                        <p class="about-text reveal">
                            Nice to meet you! 👋🏽 <br />
                            <br />
                            My name is <strong>Felix Gilbert Cagatin.</strong>
                            <br />
                            <br />
                            After graduating from the <strong>University of California, San Diego</strong> , I fell in love with programming
                            and
                            harnessed my interest for technology
                            to pursuit a career in technology!
                            <br />
                            <br />
                            A Self taught programmer turned <strong> UC Riverside Bootcamp</strong> graduate, I love to create
                            <strong> responsive</strong>, <strong>user
                                friendly</strong> applications that utilize my <strong>problem solving</strong> skills!
                        </p>
                    </div>
                    <div id="about-img-container">
                        <figure>
                            <img src={require("../images/portfolio-image.png")} alt="" id="about-img" />
                        </figure>
                    </div>
                </div>

            </div>
        </section>
    )
}