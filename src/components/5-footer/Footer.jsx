import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className='flex space-between'>
            <ul className='flex'>
                <li><a href="#about">About</a></li>
                <li><a href="#articles">Articles</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="">Uses</a></li>
            </ul>

            <p className="copy-rights">
                &copy; 2021 - Developed by 
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/zyadnasr"> Zyad Nasr</a>
            </p>
        </footer>
    )
}

export default Footer