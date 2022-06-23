import React from 'react'

const ProjectRight = (props) => {
    const { name, source, github, live, desc, full, exit } = props

    window.addEventListener("scroll", () => {
        if (document.getElementById(name).style.display != "none") {
            document.getElementById(name).style.display = "none"
        }
    });

    return (
        <div>
            <div className='project-right'>
                <h1>{name}</h1>
                <div className='project'>
                    <div>
                        <p>
                            {desc}
                        </p>
                        <h4>
                            <a target="_blank" href={github}>GitHub</a> | <a target="_blank" href={live}>Live Site</a>
                        </h4>
                    </div>
                    <img src={require('../../ProjectDisplay/Demos/' + source)} alt="" onClick={() => full(name)}/>
                </div>
            </div>

            <div id={name} className='fullscreen' onClick={() => exit(name)}>
            <img id="fullscreen-video" src={require('../../ProjectDisplay/Demos/' + source)} alt=""/>
            </div>
        </div>
    )
}

export default ProjectRight