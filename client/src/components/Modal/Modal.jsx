import { React, useEffect } from 'react'

const Modal = ({open, children, onClose}) => {

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose()
            }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    if (!open) return null

    return(
        <>
            <div onClick={onClose} className='fullscreen'>
                {children}
            </div>
        </>
    )
}

export default Modal