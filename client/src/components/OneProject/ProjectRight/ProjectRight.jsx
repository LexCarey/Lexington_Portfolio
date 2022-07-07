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
                <h1>{name}</h1>
                <div className='project'>
                    <div className='right-large'>
                        <p>
                            {desc}
                        </p>
                        <h4>
                            <a target="_blank" href={github}>GitHub</a> | <a target="_blank" href={live}>Live Site</a>
                        </h4>
                    </div>
                    <img src={require('../../ProjectDisplay/Demos/' + source)} alt="" onClick={() => openAndStopScrolling()}/>
                    <div className='right-small'>
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
                    <img id="fullscreen-video" src={require('../../ProjectDisplay/Demos/' + source)} alt=""/>
                    <p>Click anywhere to close.</p>
                </div>
            </Modal>
        </div>
    )
}

export default ProjectRight