import React from 'react'
import './Footer.css'

const Footer = () => {

    const copyToClipboard = () => {
        navigator.clipboard.writeText("LexCarey73@gmail.com")
        alert("Copied!")
    }

    return (
        <footer>
            <div>
                <p>Thanks for checking out my portfolio!</p>
            </div>
            <div className='right-footer'>
                <p onClick={() => copyToClipboard()} id="copy-email" className='divide'>LexCarey73@gmail.com</p>
                <p>Click my email above to copy it</p>
            </div>
        </footer>
    )
}

export default Footer