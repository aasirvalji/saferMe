import React from 'react';
import '../styles/AltDisplay.css'




class AltDisplay extends React.Component{

  constructor(props){
    super(props);

    this.state = {username: '',
    userNumber: '',
    emergencyName: '',
    emergencyNumber: '',
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange = (event) => {
  this.setState({
  [event.target.name] : event.target.value
})
}

handleSubmit(event) {

  alert('A name was submitted: ' + this.state.username);
  console.log(this.state.userNumber)
  console.log(this.state.emergencyName)
  console.log(this.state.emergencyNumber)
  event.preventDefault();
}

render(){
    return(
        <>

<div className='alt-con'>

<div className='alt-header'>
<h1>meMap</h1>
</div>

<form class="contact-section" onSubmit={this.handleSubmit}>
      <div class="inner-width">

        <input type="text" class="name" placeholder="Your Name" name = 'username' 
        value={this.state.value} onChange={this.handleChange} ></input>

       <input type="number" class="email" placeholder="Your Phone Number" name ="userNumber" 
       username={this.state.username} onChange={this.handleChange} ></input>

      <input type="text" class="name" placeholder="Your Name" name = 'emergencyName' 
        value={this.state.value} onChange={this.handleChange} ></input>

       <input type="number" class="email" placeholder="Your Phone Number" name ="emergencyNumber" 
       username={this.state.username} onChange={this.handleChange} ></input>
        
        <button type='submit' value="Submit">Get in touch</button> 
      </div>
    </form>

</div>

        </>
    )
}
}


export default AltDisplay;