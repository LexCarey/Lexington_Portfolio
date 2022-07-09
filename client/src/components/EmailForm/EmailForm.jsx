import './EmailForm.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, TextareaAutosize } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

    const theme = createTheme({
        palette: {
            primary: {
                main: '#8f9cca'
            },
        },
    });

    const styles = {
        floatingLabelFocusStyle: {
            color: "#8f9cca"
        }
    }

    return (
    <div className='email-form'>
        <form ref={form} onSubmit={sendEmail}>
            <ThemeProvider theme={theme}>
                <TextField
                className='text-field'
                fullWidth
                id="filled-basic"
                label="Subject"
                variant="filled"
                name='subject'/>
            <div className='mail-input flex'>
                <TextField
                className='text-field marg-r-15'
                fullWidth
                id="filled-basic"
                label="Name"
                variant="filled"
                name='name'/>
                <TextField
                className='text-field'
                fullWidth
                id="filled-basic"
                label="Email"
                variant="filled"
                name='email'
                type="email"/>
            </div>
            <TextField
            className='text-field'
            fullWidth
            id="filled-basic"
            label="Message"
            variant="filled"
            name='message'
            multiline
            minRows={5}
            maxRows={8}/>
            <br />
            <input type="submit" value="Send"/>
            </ThemeProvider>
        </form>
    </div>
    );
};

export default EmailForm

/* <input className='w100' type="text" name="subject" placeholder='Subject' />
<br />
<div className='flex'>
    <input className='w50 marg-r-10' type="text" name="name" placeholder='Name' />
    <input className='w50' type="email" name="email" placeholder='Email' />
</div>
<textarea className='w100' name="message" placeholder='Message' rows="6" />
<br />
<input type="submit" value="Send" /> */