import React from 'react'
import './Main.css'
import Header from '../components/Header/Header'
import SlantedDiv from '../components/SlantedDiv/SlantedDiv'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import ProjectDisplay from '../components/ProjectDisplay/ProjectDisplay'
import Footer from '../components/Footer/Footer'
import IntroAnimation from '../components/IntroAnimation/IntroAnimation'

const Main = () => {
    return (
        <div>
            <Header />
            <IntroAnimation />
            <SlantedDiv scroll="about" angleNumber="angle1" color="color1" content={<About />} />
            <SlantedDiv scroll="projects" angleNumber="angle2" color="color2" content={<ProjectDisplay />} />
            <SlantedDiv scroll="contact" angleNumber="angle3" color="color3" content={<Contact />} />
            <Footer />
        </div>
    )
}

export default Main