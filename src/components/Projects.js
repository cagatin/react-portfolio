import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Projects.css';

export default function Projects() {
    return (
        <section id="home-projects-section" className="reveal main-section">
            <div className="container">
                <h2 className="pt-5 text-center section-title" id="projects-title">Projects</h2>
                <section className="container-fluid px-0 py-5 reveal" id="fatbird-project-container">
                    <div className="row align-items-center">
                        <div className="project-info-container col-lg-6 col-sm-12 text-center">
                            <h2 className="project-title pb-2">Fat-Birds Wing Bar Full Stack Website</h2>
                            <p className="lead project-description">A Full Stack website utilizing technologies such as Node.js,
                                Express, mySQL for the backend, Handlebars and CSS/HTML5 for the front end, as well as
                                Passport for authentication when using the built-in content management system!
                                This website was built for our client in order to aid them expand their reach and grow their
                                online presence!
                                <br />
                                <br />
                                <a href="https://github.com/cagatin/Fatbird-Project" className="github-repo-link">Visit
                                    the github repository</a>
                                <br />
                                <a href="https://fat-birds-wing-bar.herokuapp.com/" className="deployed-app-link">Visit the
                                    Deployed Site</a>
                            </p>
                        </div>
                        <div className="project-image-container col-lg-6 col-sm-12">
                            <a href="https://fat-birds-wing-bar.herokuapp.com/">
                                <img src={require("../images/fatbirds.gif")} className="project-image img-fluid"
                                    id="fatbirds-project-image" alt="" />
                            </a>
                        </div>
                    </div>
                </section>
                <section className="container-fluid px-0 py-5 reveal" id="roadtrip-project-container">
                    <div className="row align-items-center">
                        <div className="project-image-container col-lg-6 col-sm-12 order-2 order-md-2 order-lg-1">
                            <a href="https://dcontrer83.github.io/Roadtrip">
                                <img src={require("../images/roadtrip.gif")} className="project-image img-fluid" alt="" />
                            </a>
                        </div>
                        <div className="project-info-container col-lg-6 col-sm-12 text-center order-1 order-md-1 order-lg-2">
                            <h2 className="project-title pt-2">Are We There Yet? Road Trip Helper</h2>
                            <p className="project-description lead">The ultimate roadtrip helper app!
                                Utilizing multiple Google Maps APIs, our application determines the best route to take to
                                your destination, and gives you the highest rated attractions
                                within a five mile vacinity!
                                <br />
                                <br />
                                <a href="https://github.com/cagatin/Roadtrip_App" className="github-repo-link">Visit
                                    the github repository</a>
                                <br />
                                <a href="https://dcontrer83.github.io/Roadtrip/" className="deployed-app-link">Visit the
                                    Deployed Site</a>
                            </p>
                        </div>
                    </div>
                </section>
                <section className="container-fluid px-0 py-5 reveal">
                    <div className="row align-items-center">
                        <div className="project-info-container col-lg-6 text-center">
                            <h2 className="project-title">Ecommerce Mock Backend</h2>
                            <p className="lead project-description">Internet retail, also known as e-commerce, is the largest
                                sector of the electronics industry.
                                This application is a mock backend for an e-commerce site, utilizing Express.js, Sequelize,
                                and mySQL!
                                <br />
                                <br />
                                <a href="https://github.com/cagatin/E-Commerce-Backend" className="github-repo-link">Visit
                                    the github repository</a>
                            </p>
                        </div>
                        <div className="project-image-container col-lg-6">
                            <a href="https://github.com/cagatin/E-Commerce-Backend">
                                <img src={require("../images/ecommerce.gif")} className="project-image img-fluid" alt="" />
                            </a>
                        </div>
                    </div>
                </section>
                <section className="container-fluid px-0 py-5 reveal">
                    <div className="row align-items-center">
                        <div className="project-image-container col-lg-6 col-sm-12 order-2 order-md-2 order-lg-1">
                            <a href="https://github.com/cagatin/Social-Network-API">
                                <img src={require("../images/socialnetwork.gif")} className="project-image img-fluid" alt="" />
                            </a>
                        </div>
                        <div className="project-info-container col-lg-6 col-sm-12 text-center order-1 order-md-1 order-lg-2">
                            <h2 className="project-title pt-2">Social Network API</h2>
                            <p className="project-description lead">This application is a mock API for a social network web
                                application using Express.js for routing, MongoDB as a database, and Mongoose as an ODM!
                                This databse creates a User schema for users, a Thought schema for posts made by a User, and
                                a reaction schema as a subdocument to the Thought schema for displaying User reactions to a
                                Thought!
                                <br />
                                <br />
                                <a href="https://github.com/cagatin/Social-Network-API" className="github-repo-link">Visit
                                    the github repository</a>
                            </p>
                        </div>
                    </div>
                </section>
                <section className="container-fluid px-0 py-5 reveal">
                    <div className="row align-items-center">
                        <div className="project-info-container col-lg-6 text-center">
                            <h2 className="project-title">Employee Tracker CLI CMS</h2>
                            <p className="lead project-description">A command line content management system utilizing Node.js,
                                Inquirer, Express,
                                and MYSQL to easily view and interact with company data from a database.
                                <br />
                                <br />
                                <a href="https://github.com/cagatin/Team-Profile-Generator" className="github-repo-link">Visit
                                    the github repository</a>
                            </p>
                        </div>
                        <div className="project-image-container col-lg-6">
                            <a href="https://github.com/cagatin/Team-Profile-Generator"> <img
                                src={require("../images/employee.gif")} className="project-image img-fluid" alt="" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}