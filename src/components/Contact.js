import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css';
import EmailForm from './EmailForm';

export default function Contact() {
    return (
        <section id="home-contact-section" className="main-section reveal">
            <h2 className="pt-5 text-center section-title" id="contact-title">Contact</h2>
            <section id="socials" className="text-centet pb-5">
                <div id="socials-container" className="d-flex justify-content-center align-items-center">
                    <a href="https://www.linkedin.com/in/gilbertcagatin/">
                        <img src="https://img.icons8.com/color/344/linkedin-circled--v1.png" alt=""
                            className="socials-icon mx-2" />
                    </a>
                    <a href="https://github.com/cagatin ">
                        <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt=""
                            className="socials-icon mx-2" />
                    </a>
                    <a href="https://codepen.io/gilbertcagatin">
                        <img src="https://icon-library.com/images/codepen-icon/codepen-icon-26.jpg" alt=""
                            className="socials-icon mx-2" />
                    </a>
                    <a href="https://www.tiktok.com/@codewithfelix">
                        <img src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png"
                            alt="" className="socials-icon mx-2" />
                    </a>
                </div>
            </section>
            <section id="email-section" className="pb-5">
                <p class="about-text" id="roles-text">
                    As I complete my certifcate at UC Riversides' Coding Bootcamp, I am seeking
                    opporunities
                    in the following roles:
                    <br />
                    <br />
                    <span class="role-span">Full Stack Software Development</span>
                    <br />
                    <span class="role-span">Front End Development</span>
                    <br />
                    <span class="role-span">Back End Software Development</span>
                    <br />
                    <span class="role-span">Junior Software Engineer</span>
                    <br />
                    <br />
                    If you would like to chat, please email me at: <span class="role-span">cagatingilbert@gmail.com</span>
                </p>
                <EmailForm />
            </section>
        </section>
    )
}