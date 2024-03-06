import React from 'react'
import './hero.css';
import Lottie from 'lottie-react';
import heroAnimation from "../../animation/hero.json";
import { useRef } from 'react';

function Hero() {
    const lottieRef = useRef();

    return (
        <section className='hero flex'>
            <div className="left-section">
                <div className="parent-avatar flex">
                    <img src="./avatar.jpg" alt="" className="avatar circle" />
                    <div className="icon-verified"></div>
                </div>
                <h1 className='title'>Software developer, Designer and Creative. 🚀</h1>
                <p className="sub-title">I'm Zyad Nasr, a qualified and professional web developer with 2 years of experience in web developing and design. Strong, creative and analytical skills. Ability to work with team.</p>
                <div className="all-icons flex">
                    <div onClick={() => {
                        window.open('https://www.facebook.com/ZIAD.NASR.5871')
                    }} className="icon icon-facebook-square"></div>
                    <div onClick={() => {
                        window.open('https://www.instagram.com/_.zyad__/')
                    }} className="icon icon-instagram"></div>
                    <div onClick={() => {
                        window.open('https://github.com/zyadnasr')
                    }} className="icon icon-github"></div>
                    <div onClick={() => {
                        window.open('https://www.linkedin.com/in/ziadnasrnabil')
                    }} className="icon icon-linkedin"></div>
                </div>
            </div>
            <div className="right-section animation">
                <Lottie
                    lottieRef={lottieRef}
                    onLoadedImages={() => {
                        // @ts-ignore
                        // https://lottiereact.com/
                        lottieRef.current.setSpeed(0.5);
                    }}
                    animationData={heroAnimation}
                />
            </div>
        </section>
    )
}

export default Hero