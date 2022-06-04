import React from 'react'
import './Header.css'

const Header = () => {

    const checkpoint = 600;
    let opacity = 1
    
    window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
    document.querySelector(".not-initials").style.opacity = opacity;
    document.querySelector(".not-initials2").style.opacity = opacity;
    if (opacity === 0) {
        document.querySelector(".c").classList.add("just-initials")
        document.querySelector(".c").classList.remove("all-letters")
    } else {
        document.querySelector(".c").classList.remove("just-initials")
        document.querySelector(".c").classList.add("all-letters")
    }
    });

    return (
    <div className='header'>
        <div className='name'>
            <h1>L<span className='not-initials'>exington</span></h1><h1 className='c'>C<span className='not-initials2'>arey</span></h1>
        </div>
        <div className='options'>
            <div>
                <p>About</p>
            </div>
            <div>
                <p>Projects</p>
            </div>
            <div>
                <p>Contact</p>
            </div>
        </div>
    </div>
    )
}

export default Header


// document.querySelector(".not-initials").style.display = "none";
// document.querySelector(".not-initials2").style.display = "none";