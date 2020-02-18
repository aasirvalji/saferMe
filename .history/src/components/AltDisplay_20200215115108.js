import React from 'react';
import '../styles/AltDisplay.css'




class AltDisplay extends React.Component{

  constructor(props){
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  console.log(this.state.value);
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

render(){
    return(
        <>

<div className='alt-con'>

<div className='alt-header'>
<h1>meMap</h1>
</div>

<form class="contact-section">
      <div class="inner-width">
        <input type="text" class="name" placeholder="Your Name"></input>
        <input type="email" class="email" placeholder="Your Email"></input>
        <textarea rows="1" placeholder="Message" class="message"></textarea>
        <button>Get in touch</button>
      </div>
    </form>

</div>

        </>
    )
}
}


export default AltDisplay;