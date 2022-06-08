import React from 'react'
import './About.css'

const About = () => {
    return (
        <div>
            <div style={{width: "300px", textAlign: "center"}}>
                <h1 style={{fontSize: "3em",}}>About Me</h1>
            </div>
            <div className='about'>

                <div className='about1'>
                    <img src={require('./imgs/glasses.jpeg')} alt="Pic of Me!" />
                </div>
                <div className='about2'>
                <h1>Who is Lexington?</h1>
                    <p>
                        To put it simply, I'm a problem solver. To put it not so simply... Well, I'm still a problem solver, but now with more detail! Finding a new bug or error always intrigues me because it gives me new chance to learn and develop new ways of thinking. 
                    </p>
                        <br />
                    <p>
                    There's nothing I love more than collaborating with others and seeing a product I played a role in come to life. Being in an environment where I can create, learn, and make new connections is where I do my best work!
                    </p>
                        <br /> <br />
                    <h1>Discovering My Love For Coding</h1>
                    <p>
                        I was homeschooled for a majority of my life, which gave me a ton of free time to work on myself and figure out what I was really passionate about. After trying out a few different paths like directing and editing, I found myself becoming more and more interested in the tech industry.
                    </p>
                        <br />
                    <p>
                        I knew what coding was, but if I'm being honest, I was pretty intimidated by the sheer amount of options and routes I could take. Eventually I just decided to take a leap of faith and start learning.
                    </p>
                        <br />
                    <p>
                        In February of 2022, I took on a coding bootcamp by the name of Coding Dojo. Over the course of 14 weeks I put in over 1,000 hours of hard work learning to create full stack websites in multiple languages. It was one of the greatest experiences I've been a part of, not only because of the knowledge I've gained, but becuase of the amazing connections I've made.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About