import React from 'react'
import EmailForm from '../EmailForm/EmailForm'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
    <div className='contact'>
        <h2 style={{textAlign: "left"}}>Contact</h2>
        <h1 style={{textAlign: "left"}}>Shoot Me An Email Here!</h1>
        <div className='contact-flex'>
        <EmailForm />
            <div className='socials'>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/lexington-carey/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/AkuaDrowned" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/akuadrowned/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                    <li>
                        <a href="https://github.com/LexCarey" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    </li>
                </ul>
                <h1></h1>
            </div>
        </div>
    </div>
    )
}

export default Contact