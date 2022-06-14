import React from 'react'
import './ProjectDisplay.css'

const ProjectDisplay = () => {
    return (
        <div className='projects'>
            <h2>Projects</h2>

            <div className='project-left'>
                <h1>AmpliFire</h1>
                <div className='project'>
                    <video autoPlay loop muted>
                        <source src={require('./Demos/Amplifire_Demo.mp4')} type="video/mp4" />
                    </video>
                    <div>
                        <p>
                            AmpliFire is a music based social media platform where you can share your excitement, talk with others, and post your musical hot takes under many different genres. Find people with similar music taste as you by filtering through your favorite genres!
                        </p>
                        <h4>
                            <a target="_blank" href="https://github.com/LexCarey/AmpliFire">GitHub</a> | <a target="_blank" href="">Live Site</a>
                        </h4>
                    </div>
                </div>
            </div>

            <div className='project-right'>
                <h1>Invrt</h1>
                <div className='project'>
                    <div>
                        <p>
                            Invrt is an eCommerce site I created for my friends clothing brand, INVRT.  Working in a collaborative setting where I could communicate with a close friend and recieve real feedback made this one of my favorite projects to work on.
                        </p>
                        <h4>
                            <a target="_blank" href="https://github.com/LexCarey/invrt">GitHub</a> | <a target="_blank" href="">Live Site</a>
                        </h4>
                    </div>
                    <video autoPlay loop muted>
                        <source src={require('./Demos/Amplifire_Demo.mp4')} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default ProjectDisplay

// Invrt is a new clothing brand that I was tasked to create an eCommerce site for.