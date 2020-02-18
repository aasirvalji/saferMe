import React, {useState} from 'react';
import '../styles/MapDisplay.css';
import { render } from '@testing-library/react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import data from '../data/ca.json';
import mapStyles from '../mapStyles'

{/*start google maps stuff*/}

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);
  //null because nothing selected initially

    return (
      console.log(data),
    <GoogleMap defaultZoom = {8} defaultCenter = {{lat: 42.997570, lng: -81.276710}} defaultOptions={{styles: mapStyles}}
    >


{data.features.map(index => (
        <Marker
          key={index.population.id}
          position={{
            lat: index.lat,
            lng: index.lng,
          }}
          onClick={() => {
            setSelectedPark(index);
          }}

        />
      ))}




    </GoogleMap>

    )
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

{/*end google maps stuff*/}



class MapDisplay extends React.Component{
    constructor(){
        super();
    }

    render(){

  
    return(
        <>

<div className='map-con'>

<div className='map-header'>
<h1>meInfo</h1>
</div>

<div className='map-details'>

<p>Dont get shanked</p>

{/*inject google maps below */}
<div className = 'map-div' style={{ width: "80vw", height: "50vh", margin: "auto", marginBottom: "10vh" }}>
<MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
 {/*inject google maps above */}   
 </div>

</div>


        </>
    )
}
}




export default MapDisplay;