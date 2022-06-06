import React from 'react'
import './SlantedDiv.css'

const SlantedDiv = (props) => {
    const { angleNumber, color, content } = props

    return (
        <div >
            <div className={`angle ${angleNumber}`}></div>
            <div className={`center ${color}`}>
                {content}
            </div>
        </div>
    )
}

export default SlantedDiv