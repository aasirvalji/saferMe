import React from 'react';
import './App.css';
import Navigate from './components/Navigate'
import Landing from './components/Landing'
import Services from './components/Services'
import MapDisplay from './components/MapDisplay'
import GraphDisplay from './components/GraphDisplay'
import AltDisplay from './components/AltDisplay'
import AboutDisplay from './components/AboutDisplay'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component { //when working with any type of data, call it in App then pass to comp on interest

  constructor(props) {
    super(props);

  }
  
/* start api sample */
/*
  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  */
/* end api sample */
  render(){

  
  return (
    <Router>
    <div className="App">

    <Switch>

    <Route exact path="/">
    <div className='landing-div'>
    <Navigate></Navigate>
    <Landing></Landing>
    <img className='wave' src='https://www.ochrehealth.com.au/wp-content/uploads/2018/10/slider-wave.png' alt=''></img>  {/* wave pattern*/}
    </div>
    {/* services placement*/}
    {/* maps placement*/}
    </Route>

    <Route path="/about">
    <div className='about-background'>
    <Navigate></Navigate>
    
    <AboutDisplay></AboutDisplay>
    </div>
    </Route>

    <Route path="/map">
    <div className='map-background'>
    <Navigate></Navigate>
    
    <MapDisplay></MapDisplay>
    </div>
    </Route>

    <Route path="/graph">
    <div className='graph-background'>
    <Navigate></Navigate>
    
 
    </div>
    </Route>

    <Route path="/alt">
    <div className='alt-background'>
    <Navigate></Navigate>
    
    <AltDisplay></AltDisplay>
    </div>
    </Route>

    </Switch>

    </div>
    </Router>
    
  );
  }
}

export default App;
