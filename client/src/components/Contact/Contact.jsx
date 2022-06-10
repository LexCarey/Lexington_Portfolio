import React from 'react'
import EmailForm from '../EmailForm/EmailForm'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/lexington-carey/" target="_blank">Linked In</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/AkuaDrowned" target="_blank">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/akuadrowned/" target="_blank">Instagram</a>
                    </li>
                    <li>
                        <a href="https://github.com/LexCarey" target="_blank">GitHub</a>
                    </li>
                </ul>
            </div>
            <EmailForm />
        </div>
    )
}

export default Contact