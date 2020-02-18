import React from 'react';
import '../styles/AboutDisplay.css'
import img from '../assets/growth.png'



function AboutDisplay(){
    return(
        <>

        <div className='about-con'>

        <div className='about-header'>
        <h1>About</h1>
        </div>

        <div className='about-details'>

        <p>Health concerns are rising and health awareness is growing amongst the Canadian population. 
        As mental health concerns are on the rise, an outlet to unwind is needed now more than ever.
        Hence, our mission at Aurorah is to provide integrated wellness to improve the quality of Canadians life.</p>

        <img src={img} alt='about'></img>

         </div>

        </div>

        </>
    )
}


export default AboutDisplay;