import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top d-flex">
            <button className="navbar-toggler navbar-toggle ml-3" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav d-flex ml-auto mx-auto">
                    <li className="nav-item">
                        <a href="#home-projects-section" className="nav-link px-4 text-center">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#home-skills-section" className="nav-link px-4 text-center">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#home-about-section" className="nav-link px-4 text-center">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#home-contact-section" className="nav-link px-4 text-center">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="/assets/FelixCagatinResume.pdf" className="nav-link px-4 text-center">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}