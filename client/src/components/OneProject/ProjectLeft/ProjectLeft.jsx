import { React, useState } from 'react';
import Modal from '../../Modal/Modal';

const ProjectLeft = (props) => {
    const { name, source, github, live, desc } = props
    const [isOpen, setIsOpen] = useState(false)

    const openAndStopScrolling = () => {
        setIsOpen(true)
        document.body.style.overflowY = 'hidden';
    }
    const closeAndScroll = () => {
        setIsOpen(false)
        document.body.style.overflowY = '';
    }

    return (
        <div>
            <div className='project-left'>
                <h1>{name}</h1>
                <div className='project'>
                    <video autoPlay loop muted onClick={() => openAndStopScrolling()}>
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

            <Modal open={isOpen} onClose={() => closeAndScroll()}>
                <div>
                    <video id="fullscreen-video" autoPlay loop muted>
                        <source src={require('../../ProjectDisplay/Demos/' + source)} type="video/mp4" />
                    </video>
                    <p>Click anywhere to close.</p>
                </div>
            </Modal>
        </div>
    )
}

export default ProjectLeft