import React from 'react'
import { useEffect } from 'react'
import './IntroAnimation.css'

const IntroAnimation = () => {

    useEffect(() => {
        const letters = document.querySelectorAll("li")

        setTimeout(() => {
            Array.from(letters).forEach((letter, i) => {
                setTimeout(() => {
                    letter.classList.add("show")
                }, i * 50)
            })
        }, 200)
    }, [])

    return (
        <div id="intro" className='center hey flex'>
            <ul className='center flex flex-col italicezed'>
                <div className='flex center'>
                    <li>H</li>
                    <li>e</li>
                    <li>y</li>
                    <li>!</li>
                    <li className='spaced'>I</li>
                    <li>'</li>
                    <li>m</li>
                    <li className='spaced'>L</li>
                    <li>e</li>
                    <li>x</li>
                    <li>i</li>
                    <li>n</li>
                    <li>g</li>
                    <li>t</li>
                    <li>o</li>
                    <li>n</li>
                    <li>,</li>
                </div>
                <div className='flex center'>
                    <li>a</li>
                    <li className='spaced'>F</li>
                    <li>u</li>
                    <li>l</li>
                    <li>l</li>
                    <li className='spaced'>S</li>
                    <li>t</li>
                    <li>a</li>
                    <li>c</li>
                    <li>k</li>
                    <li className='spaced'>D</li>
                    <li>e</li>
                    <li>v</li>
                    <li>e</li>
                    <li>l</li>
                    <li>o</li>
                    <li>p</li>
                    <li>e</li>
                    <li>r</li>
                </div>
                <div className='flex center'>
                    <li>b</li>
                    <li>a</li>
                    <li>s</li>
                    <li>e</li>
                    <li>d</li>
                    <li className='spaced'>i</li>
                    <li>n</li>
                    <li className='spaced'>L</li>
                    <li>o</li>
                    <li>s</li>
                    <li className='spaced'>A</li>
                    <li>n</li>
                    <li>g</li>
                    <li>e</li>
                    <li>l</li>
                    <li>e</li>
                    <li>s</li>
                    <li>.</li>
                </div>
            </ul>
        </div>
    )
}

export default IntroAnimation