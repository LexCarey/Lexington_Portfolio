import React from 'react'
import './SlantedDiv.css'

const SlantedDiv = (props) => {
    const { angleNumber, color, content, scroll } = props

    return (
        <div >
            <div className={`angle ${angleNumber}`}></div>
            <div id={scroll} className={`flex center ${color} main-div`}>
                {content}
            </div>
        </div>
    )
}

export default SlantedDiv