import React from 'react'

const ProjectLeft = (props) => {
    const { name, source, github, live, desc, full, exit } = props

    window.addEventListener("scroll", () => {
        if (document.getElementById(name).style.display != "none") {
            document.getElementById(name).style.display = "none"
        }
    });

    return (
        <div>
            <div className='project-left'>
                <h1>{name}</h1>
                <div className='project'>
                    <video autoPlay loop muted onClick={() => full(name)}>
                        <source src={require('../../ProjectDisplay/Demos/' + source)} type="video/mp4" />
                    </video>
                    <div>
                        <p>
                            {desc}
                        </p>
                        <h4>
                            <a target="_blank" href={github}>GitHub</a> | <a target="_blank" href={live}>Live Site</a>
                        </h4>
                    </div>
                </div>
            </div>

            <div id={name} className='fullscreen' onClick={() => exit(name)}>
                <video id="fullscreen-video" autoPlay loop muted>
                    <source src={require('../../ProjectDisplay/Demos/' + source)} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default ProjectLeft