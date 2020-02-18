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
{/*}
  alert('A name was submitted: ' + this.state.username);
  console.log(this.state.userNumber)
  console.log(this.state.emergencyName)
  console.log(this.state.emergencyNumber)
*/}

  event.preventDefault();
}

sendData(){

  // create a new XMLHttpRequest
  var xhr = new XMLHttpRequest()

  // get a callback when the server responds
  xhr.addEventListener('load', () => {
    // update the state of the component with the result here
    console.log(xhr.responseText)
  })
  // open the request with the verb and the url
  xhr.open('POST', 'https://valley.alishanpiyarali.repl.co/form')
  // send the request
  xhr.send(this.state.username, this.state.userNumber, this.state.emergencyName, this.state.emergencyNumber)
}



render(){
    return(
        <>

<div className='alt-con'>

<div className='alt-header'>
<h1>meMap</h1>
</div>

<form class="contact-section" onSubmit={this.sendData}>
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