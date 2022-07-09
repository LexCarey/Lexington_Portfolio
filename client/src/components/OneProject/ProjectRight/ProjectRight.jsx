import { React, useState } from 'react';
import Modal from '../../Modal/Modal';

const ProjectRight = (props) => {
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
            <div className='project-right'>
                <h1 class="project-name">{name}</h1>
                <div className='project'>
                    <div className='right-large'>
                        <p>
                            {desc}
                        </p>
                        <h4>
                            <a target="_blank" href={github}>GitHub</a> | <a target="_blank" href={live}>Live Site</a>
                        </h4>
                    </div>
                    <video autoPlay loop muted webkit-playsinline playsinline onClick={() => openAndStopScrolling()}>
                        <source src={require('../../ProjectDisplay/Demos/' + source)} type="video/mp4" />
                    </video>
                    <div className='right-small'>
                        <p>
                            {desc}
                        </p>
                        <h4>
                            <a target="_blank" href={github}>GitHub</a> {live && <>| <a target="_blank" href={live}>Live Site</a></>}
                        </h4>
                    </div>
                </div>
            </div>

            <Modal open={isOpen} onClose={() => closeAndScroll()}>
                <div>
                    <video id="fullscreen-video" autoPlay loop muted webkit-playsinline playsinline>
                        <source src={require('../../ProjectDisplay/Demos/' + source)} type="video/mp4" />
                    </video>
                    <p>Click anywhere to close.</p>
                </div>
            </Modal>
        </div>
    )
}

export default ProjectRight