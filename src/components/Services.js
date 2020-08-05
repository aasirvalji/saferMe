import React from 'react';
import '../styles/Services.css'
import img1 from '../assets/meditate.png'
import img2 from '../assets/growth.png'
import img3 from '../assets/cookie.png'



function Services(){
    return(
        <>
        <div class='services-header'>
<h1>Services</h1>
</div>
<div class="services">
<div class="one">
<h1>eMap</h1>
<img src={img1} alt=''></img>
<p>
Destress using your surroundings
</p>
</div>
<div class="two">
<h1>eGraph</h1>
<img src={img2} alt=''></img>
<p>
Track your emotional life cycle
</p>
</div>
<div class="three">
<h1>eNutrition</h1>
<img src={img3} alt=''></img>
<p>
Stay in control of your mind and body
</p>
</div>
</div>
        </>
    )
}


export default Services;