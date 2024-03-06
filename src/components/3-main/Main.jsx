import React, { useState } from 'react';
import './main.css';
import { myProjects } from './myProjects';
import { AnimatePresence, motion } from 'framer-motion';

function Main() {
    const [currentActive, setcurrentActive] = useState("all");
    const [arr, setarr] = useState(myProjects);

    const handleClick = (buttonCategory) => {
        setcurrentActive(buttonCategory);
        const newArr = myProjects.filter((item) => {
            const zzz = item.category.filter((myitem) => {
                return myitem === buttonCategory;
            })
            return zzz[0] === buttonCategory;
        });
        setarr(newArr);
    }
    return (
        <main className='flex'>
            <section className="flex column left-section">
                <button 
                    onClick={()=> {
                    setcurrentActive("all")
                    setarr([...myProjects])
                }} className={currentActive === "all" ? "active" : null}>All Projects</button>
                <button 
                    onClick={()=> {
                        handleClick('css')
                    }} className={currentActive === "css" ? "active" : null}>HTML & CSS</button>
                <button 
                    onClick={()=> {
                        handleClick('javascript')
                    }} className={currentActive === "javascript" ? "active" : null}>JavaScript</button>
                <button 
                    onClick={()=> {
                        handleClick('react')
                    }} className={currentActive === "react" ? "active" : null}>React & MUI</button>
                <button 
                    onClick={()=> {
                        handleClick('Node & Express')
                    }} className={currentActive === "Node & Express" ? "active" : null}>Node & Express</button>
            </section>
            <section className="right-section flex wrap">
                <AnimatePresence>
                    {arr.map((item) => {
                        return (
                            <motion.article 
                            
                                layout
                                initial={{transform: "scale(0)"}}
                                animate={{transform: "scale(1)"}}
                                transition={{type: "spring", damping: 5, stiffness: 50}}
                            
                            key={item.id} className="card">
                                <img width={266} src={item.projectImage} alt="" />
                                <div style={{ width: "266px" }} className="box">
                                    <h1 className="title">{item.projectTitle}</h1>
                                    <p className="sub-title">{item.projectSubTitle}</p>
                                    <div className="flex icons">
                                        <div className='flex gap'>
                                            <div onClick={()=> {
                                                window.open(item.projectLink, "_blank")
                                            }} className="icon-link"></div>
                                            <div onClick={()=> {
                                                window.open(item.projectGithub, "_blank")
                                            }} className="icon-github"></div>
                                        </div>
                                        <a className='flex' href={item.projectLink}>more 
                                            <span className='icon-arrow-right'></span>
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </AnimatePresence>
            </section>
        </main>
    )
}

export default Main