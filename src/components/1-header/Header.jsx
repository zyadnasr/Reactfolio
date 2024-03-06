import React, { useState, useEffect } from 'react';
import './header.css';

function Header() {
    const [showModel, setshowModel] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");
    useEffect (()=> {
        if(theme === "light") {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        } else {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
        }
    }, [theme]);
    return (
        <header className='flex'>
            <button
                className="menu icon-menu"
                onClick={() => {
                    setshowModel(true);
                    console.log(showModel);
                }}></button>

            <div />

            <nav>
                <ul className='flex'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#articles">Articles</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#speaking">Speaking</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <button 
                className='mode'
                onClick={() => {
                    localStorage.setItem("currentMode", theme == "dark" ? "light" : "dark");
                    setTheme(localStorage.getItem("currentMode"))
                }}>
                {theme === "dark" ? ( <span className='icon-moon-o'></span> ) : ( <span className='icon-sun'></span> )}
            </button>
            {showModel && (
                <div className="fixed">
                    <ul className='model'>
                        <li><button className='icon-close' onClick={()=> {
                            setshowModel(false);
                        }}/></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#articles">Articles</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#speaking">Speaking</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header