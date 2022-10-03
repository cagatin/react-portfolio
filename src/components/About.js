import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/About.css';

export default function About() {
    return (
        <section id="home-about-section"
            className="main-section reveal  d-flex flex-column justify-content-center align-items-center">
            <div className="container">
                <h2 className="pt-5 text-center section-title" id="about-title">About Me</h2>
                <p className="about-text">
                    Having studied at the <span className="name">University of California, San Diego</span> with a major in
                    <span className="name">International Business and a minor in Accounting,</span> I took a <span
                        className="name">leap
                        of faith</span> at the
                    start of the pandemic and have been a self-taught
                    programmer
                    for the past two years.
                    <br />
                    <br />
                    My <span className="name"> self-studying</span> journey began directly after completing my degree, during
                    the
                    start of the 2019
                    Covid Pandemic. Like many others, I wanted to learn a new skill with all the newfound time I was
                    given, and ultimately chose to learn how to code. Falling completely in love with it, I decided to
                    take a <span className="name">leap of faith </span> and take the time necessary to pursue a career in the
                    tech
                    industry.
                    <br />
                    <br />
                    I began with <span className="name">Python</span>, creating an automated study-tracking spreadsheet in order
                    to
                    create consistency in my study habits. I then learned <span className="name">Java</span> via <span
                        className="name">UC Berkeley's</span> CS61B course as a means to
                    learn <span className="name">data
                        structures and algorithms</span>, a core aspect of any developer's toolbelt.
                    <br />
                    <br />
                    I then transitioned to <span className="name">Web Development</span>, first utilizing Udemy's Full Stack
                    Course
                    to learn <span className="name">HTML, CSS, and JavaScript</span>, and ultimately enrolling at the <span
                        className="name">University of California, Riverside Extention's Coding Bootcamp</span> to enhance my
                    understanding on
                    what it means to be a good <span className="name">web developer</span>.
                    <br />
                    <br />
                    <p className="about-text" id="roles-text">
                        As I complete this course and gain my <span className="name">certificate</span>, I am now seeking
                        opporunities
                        in the following roles:
                        <br />
                        <br />
                        • Full Stack Software Development
                        <br />
                        • Front End Development
                        <br />
                        • Back End Development
                        <br />
                        • Junior Software Engineer
                    </p>
                </p>
            </div>
        </section>
    )
}