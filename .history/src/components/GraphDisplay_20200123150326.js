import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact  from 'highcharts-react-official'
import {Form} from 'react-bootstrap'
import '../styles/GraphDisplay.css';

const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [0]
  }]
 }
 


class GraphDisplay extends Component{

  constructor(props){
    super(props);
 
    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        title: {
          text: 'My chart'
        },
        series: [{
          data: [0]
        }],
      },
    };
  }

  

  handleTen() {
    this.setState({ 
      chartOptions: {
        series: [
          { data: [1, 1, 1]}
        ]
      }
    });
  }

  handleTw() {
    this.setState({ 
      chartOptions: {
        series: [
          { data: [1, 2, 2]}
        ]
      }
    });
  }

  handleTh() {
    this.setState({ 
      chartOptions: {
        series: [
          { data: [1, 2, 3]}
        ]
      }
    });
  }

  render(){
    const {chartOptions} = this.state;   
    return(
      
      <>
      <div className='yy'>
      <div className="graph-con">
  
      <div className='graph-header'>
        <h1>eGraph</h1>
        </div>
  
        <div className='graph-details'>
  
        <p>Our eGraph lets you graph your emotions over a period of time.
        Keep track of yourself and help yourself become the best version of you.</p>
  
      </div>
     
  
      <div className="form-con">




<Form>
  {['radio'].map(type => (
    <div key={`custom-inline-${type}`} className="mb-3">
      <Form.Check
     
        custom
        inline
        label="Sad"
        name='selector'
        value={10}
        onClick={() => this.handleTen()}
        type={type}
        id={`custom-inline-${type}-1`}
      />
      <Form.Check
        custom
        inline
        label="Neutral"
        value="20"
        name='selector'
        onClick={() => this.handleTw()}
        type={type}
        id={`custom-inline-${type}-2`}
      />
      <Form.Check
        custom
        inline
        label="Happy"
        name='selector'
        value="20"
        onClick={() => this.handleTh()}
        type={type}
        id={`custom-inline-${type}-3`}
      />
    </div>
  ))}
</Form>

</div>
        <HighchartsReact
    highcharts={Highcharts}
    options={chartOptions}
  />
 </div>


  </div>
      </>
    )
  }
}

export default GraphDisplay;
