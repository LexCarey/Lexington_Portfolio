import React from 'react'
import './EmailForm.css'

const EmailForm = () => {
    return (
        <div className='email-form'>
            <form>
                <input className='w100' type="text"/>
                <input className='w100' type="text"/>
                <input className='w100 h' type="text"/>
            </form>
        </div>
    )
}

export default EmailForm