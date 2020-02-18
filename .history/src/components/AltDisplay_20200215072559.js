import React from 'react';
import '../styles/AltDisplay.css'




function AltDisplay(){
    return(
        <>

<div className='alt-con'>

<div className='alt-header'>
<h1>meMap</h1>
</div>

<div className='alt-details'>

<p> Make the switch to a cleaner diet and see your lifestyle improve.
    Its time to get that healthy body and achieve a healthy mind. 
    <br></br>
    <br></br>
    Here are 
    some cleaner alternatives to everyday foods: 
</p>

<div class="task-list middle">

<h2>My eGuide</h2>
<label class="task">
  <input type="checkbox"></input>
  <i class="fas fa-check"></i>
  <span class="text">Swap morning coffee for matcha tea</span>
</label>

<label class="task">
  <input type="checkbox"></input>
  <i class="fas fa-check"></i>
  <span class="text">Add 2 more liters of water to current intake</span>
</label>

<label class="task">
  <input type="checkbox"></input>
  <i class="fas fa-check"></i>
  <span class="text">Avoid eating Doritos late at night</span>
</label>

<label class="task">
  <input type="checkbox"></input>
  <i class="fas fa-check"></i>
  <span class="text">Start using Mayo instead of Mustard</span>
</label>
</div>


<img src="https://assets.materialup.com/uploads/57a21feb-709a-43d0-8ba1-d066ccb48390/preview.jpg" alt='food'></img>

 </div>

</div>

        </>
    )
}


export default AltDisplay;