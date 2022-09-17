import React from 'react'
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api"

function GoogleMapsApi() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey:process.env.REACT_APP_API_KEY,
        
    });

    if (!isLoaded) return <div>Google Maps Loading...</div>

  return (
    <Map/>
  )
  function Map(){
    return(
        <GoogleMap 
        zoom={4}
        center={{lat:58.6046170282005, lng:12.85691039318234}}
        mapContainerClassName="googleMaps">
         <MarkerF position={{lat:59.33472427330641, lng:18.057796344507967}}/>
         <MarkerF position={{lat:55.682551069186104, lng:12.578272657248286}}/>
         <MarkerF position={{lat:59.91132071018007, lng:10.740806549709916}}/>   
        </GoogleMap>
    )
  }
}

export default GoogleMapsApi

