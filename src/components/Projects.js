import React from 'react';
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
                                <a href="https://github.com/cagatin/Fatbird-Project" className="github-repo-link">Visit
                                    the github repository</a>
                                <a href="https://fat-birds-wing-bar.herokuapp.com/" className="deployed-app-link">Visit the
                                    Deployed Site</a>
                            </p>
                        </div>
                        <div className="project-image-container col-lg-6 col-sm-12">
                            <a href="https://fat-birds-wing-bar.herokuapp.com/">
                                <img src={require("../images/fatbirds.gif")} class="project-image img-fluid"
                                    id="fatbirds-project-image" alt="" />
                            </a>
                        </div>
                    </div>
                </section>
                <section class="container-fluid px-0 py-5 reveal" id="roadtrip-project-container">
                    <div class="row align-items-center">
                        <div class="project-image-container col-lg-6 col-sm-12 order-2 order-md-2 order-lg-1">
                            <a href="https://dcontrer83.github.io/Roadtrip">
                                <img src="../../public/images/roadtrip.gif" class="project-image img-fluid" alt="" />
                            </a>
                        </div>
                        <div class="project-info-container col-lg-6 col-sm-12 text-center order-1 order-md-1 order-lg-2">
                            <h2 class="project-title pt-2">Are We There Yet? Road Trip Helper</h2>
                            <p class="project-description lead">The ultimate roadtrip helper app!
                                Utilizing multiple Google Maps APIs, our application determines the best route to take to
                                your destination, and gives you the highest rated attractions
                                within a five mile vacinity!
                                <a href="https://github.com/cagatin/Roadtrip_App" class="github-repo-link">Visit
                                    the github repository</a>
                                <a href="https://dcontrer83.github.io/Roadtrip/" class="deployed-app-link">Visit the
                                    Deployed Site</a>
                            </p>
                        </div>
                    </div>
                </section>
                <section class="container-fluid px-0 py-5 reveal">
                    <div class="row align-items-center">
                        <div class="project-info-container col-lg-6 text-center">
                            <h2 class="project-title">Ecommerce Mock Backend</h2>
                            <p class="lead project-description">Internet retail, also known as e-commerce, is the largest
                                sector of the electronics industry.
                                This application is a mock backend for an e-commerce site, utilizing Express.js, Sequelize,
                                and mySQL!
                                <a href="https://github.com/cagatin/E-Commerce-Backend" class="github-repo-link">Visit
                                    the github repository</a>
                            </p>
                        </div>
                        <div class="project-image-container col-lg-6">
                            <a href="https://github.com/cagatin/E-Commerce-Backend">
                                <img src="../../public/images/ecommerce.gif" class="project-image img-fluid" alt="" />
                            </a>
                        </div>
                    </div>
                </section>
                <section class="container-fluid px-0 py-5 reveal">
                    <div class="row align-items-center">
                        <div class="project-image-container col-lg-6 col-sm-12 order-2 order-md-2 order-lg-1">
                            <a href="https://github.com/cagatin/Social-Network-API">
                                <img src="../../public/images/socialnetwork.gif" class="project-image img-fluid" alt="" />
                            </a>
                        </div>
                        <div class="project-info-container col-lg-6 col-sm-12 text-center order-1 order-md-1 order-lg-2">
                            <h2 class="project-title pt-2">Social Network API</h2>
                            <p class="project-description lead">This application is a mock API for a social network web
                                application using Express.js for routing, MongoDB as a database, and Mongoose as an ODM!
                                This databse creates a User schema for users, a Thought schema for posts made by a User, and
                                a reaction schema as a subdocument to the Thought schema for displaying User reactions to a
                                Thought!
                                <a href="https://github.com/cagatin/Social-Network-API" class="github-repo-link">Visit
                                    the github repository</a>
                            </p>
                        </div>
                    </div>
                </section>
                <section class="container-fluid px-0 py-5 reveal">
                    <div class="row align-items-center">
                        <div class="project-info-container col-lg-6 text-center">
                            <h2 class="project-title">Employee Tracker CLI CMS</h2>
                            <p class="lead project-description">A command line content management system utilizing Node.js,
                                Inquirer, Express,
                                and MYSQL to easily view and interact with company data from a database.
                                <a href="https://github.com/cagatin/Team-Profile-Generator" class="github-repo-link">Visit
                                    the github repository</a>
                            </p>
                        </div>
                        <div class="project-image-container col-lg-6">
                            <a href="https://github.com/cagatin/Team-Profile-Generator"> <img
                                src="../../public/images/employee.gif" class="project-image img-fluid" alt="" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}