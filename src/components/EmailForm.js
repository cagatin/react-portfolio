import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function EmailForm() {
    const form = useRef();

    const sendEmail = (evt) => {
        evt.preventDefault();

        emailjs.sendForm(
            'cagatingilbert',
            "template_181s8oy",
            form.current,
            "f60rq9SK_mpH65ZEI"
        )
            .then(() => document.querySelector('#submit-form').value = 'Sucessfully Sent!')
            .catch((err) => document.querySelector('#submit-form').value = 'Could not send email!');
    }

    return (
        <form id="contact-form" ref={form} onSubmit={sendEmail}>
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
    );
}