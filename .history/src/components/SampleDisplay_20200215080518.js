import React, {useState} from 'react';
import '../styles/MapDisplay.css';
import { render } from '@testing-library/react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import * as data from '../data/Facilities_Installation_Point_vw.json';
import mapStyles from '../mapStyles'

{/*start google maps stuff*/}

function Map() {
  const [selectedData, setSelectedData] = useState(null);
  //null because nothing selected initially

    return (
    
    <GoogleMap defaultZoom = {10} defaultCenter = {{lat: 42.997570, lng: -81.276710}} defaultOptions={{styles: mapStyles}}
    defaultOptions={{styles: mapStyles}}
    >

    {data.features.map((i) => 
    (<Marker key = {i.properties.OBJECTID} 
              position={{
            lat: i.geometry.coordinates[1],
            lng: i.geometry.coordinates[0]
          }}

          onClick={() => {
            setSelectedPark(i);
          }}
          >

          </Marker>
    ))}

    {selectedPark && ( //is selectedPark is true, return whatever is after &&
      <InfoWindow        
      position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          >
          <div>
          <h2>{selectedPark.properties.name_e}</h2>
          <p>{selectedPark.properties.Facility_Type_Installation}</p>

          </div>
          </InfoWindow>
    )}

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