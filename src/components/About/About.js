import React from 'react'

import FirstWave from '../../assets/images/first_wave.webp'
import arrowUp from '../../assets/images/arrowUp.svg'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {

const container = useRef();

useGSAP(() => {
  // gsap code here...
  gsap.to(".box", {x: endX}); // <-- automatically reverted

}, { scope: container }); // <-- scope is for selector text (optional)

  return (
    <>
    <div className='summer_bg bg'>
    <div class="waves">
        <div class="wave">
            <div><img src={FirstWave} alt="wave" /></div>
            {/* <div><img src="images/first_middle.png" alt="wave"></div>
            <div><img src="images/second_middle.png" alt="wave"></div>
            <div><img src="images/last_wave.png" alt="wave"></div> */}
        </div>
    </div>     
    <div class="about box">
        <h2>About Me</h2>
        <p>My coding journey started in 2020 when I did an Access to HE Engineering 
            Diploma. I learned about C# and databases. My journey continued when I 
            went to Surrey University to study Electrical and Electronic Engineering.
            During my time there I studied Python.  
        </p>
        <p>Now I am an aspiring Software Developer. Having recently completed a 
            12 week software development bootcamp, I have been gaining knowledge and 
            experience in multiple coding languages.</p>
    </div>
    <button onClick="ScrollToTop()" id="scrollToTop">
        <img src={arrowUp} alt="arrow up" />
    </button>
    </div>
    </>
  )
}

export default About