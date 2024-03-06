import Hero from './components/2-hero/Hero';
import Header from './components/1-header/Header';
import Contact from './components/4-contact/Contact';
import Footer from './components/5-footer/Footer';
import Main from './components/3-main/Main';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.addEventListener("scroll", ()=> {
      const scroll2Top = document.getElementById("#toTopArrow");
      const scrollYPosition = 509.6000061035156; // Height of the hero component + a bit more
      if (window.scrollY >= scrollYPosition ) {
        scroll2Top.classList.add("show2Top");
      } else {
        scroll2Top.classList.remove("show2Top");
      }
    })
  } , []); // empty dependency array means to run this code once on component mount
  return (
    <div id='up' className='container'>
      <Header />
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />
      <a href="#up" style={{color: 'white'}}>
        <button id="#toTopArrow" className="scroll2Top icon-keyboard_arrow_up"></button>
      </a>
    </div>
  )
}

export default App
