import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css';

export default function Contact() {
    return (
        <section id="home-contact-section" className="reveal main-section">
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
                <h3>Email Me!</h3>
                <form id="contact-form">
                    <div className="form-group">
                        <input type="hidden" />
                    </div>
                    <div className="form-group">
                        <label for="user_name">Please Enter Your Name:</label>
                        <input type="text" id="user_name" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label for="user_email">Please Enter Your Email:</label>
                        <input type="email" id="user_email" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label for="email_content">Please Enter Your Message:</label>
                        <textarea id="email_content" className="form-control" required></textarea>
                    </div>
                    <input type="submit" value="Send" id="submit-form" />
                </form>
            </section>
        </section>
    )
}