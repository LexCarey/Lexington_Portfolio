import React from 'react'
import './Main.css'
import Header from '../components/Header/Header'
import SlantedDiv from '../components/SlantedDiv/SlantedDiv'
import About from '../components/About/About'

const Main = () => {
    return (
        <div>
            <Header />
            <div className='center hey'>
                <p>Hey, I'm Lexington. <br /> I'm a Full Stack Developer</p>
            </div>
            <SlantedDiv angleNumber="angle1" color="color1" content={<About />} />
            <SlantedDiv angleNumber="angle2" color="color2" />
            <SlantedDiv angleNumber="angle3" color="color3" />
        </div>
    )
}

export default Main