import './EmailForm.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const EmailForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0a8trgo', 'portfolio_template', form.current, 'RhEvl5hur3DgNAMMD')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    form.current.reset()
    };

    return (
    <div className='email-form'>
        <form ref={form} onSubmit={sendEmail}>
            <input className='w100' type="text" name="subject" placeholder='Subject' />
            <br />
            <div className='flex'>
                <input className='w50 marg-r-10' type="text" name="name" placeholder='Name' />
                <input className='w50' type="email" name="email" placeholder='Email' />
            </div>
            <textarea className='w100' name="message" placeholder='Message' rows="6" />
            <br />
            <input type="submit" value="Send" />
        </form>
    </div>
    );
};

export default EmailForm