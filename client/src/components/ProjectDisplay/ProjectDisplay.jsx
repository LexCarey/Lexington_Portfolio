import React from 'react'
import ProjectLeft from '../OneProject/ProjectLeft/ProjectLeft'
import ProjectRight from '../OneProject/ProjectRight/ProjectRight'
import './ProjectDisplay.css'

const ProjectDisplay = () => {
    return (
        <div className='projects'>
            <h2>Projects</h2>
            <ProjectLeft name="AmpliFire" source='Amplifire_Demo.mp4' github="https://github.com/LexCarey/AmpliFire" live="" desc="AmpliFire is a music based social media platform where you can share your excitement, talk with others, and post your musical hot takes under many different genres. Find people with similar music taste as you by filtering through your favorite genres!"/>
            <ProjectRight name="INVRT" source='INVRT_Demo.mp4' github="https://github.com/LexCarey/invrt" live="http://invrtofficial.com" desc="INVRT is an eCommerce site I created for my friends clothing brand, INVRT.  Working in a collaborative setting where I could communicate with a close friend and receive real feedback made this one of my favorite projects to date."/>
        </div>
    )
}

export default ProjectDisplay