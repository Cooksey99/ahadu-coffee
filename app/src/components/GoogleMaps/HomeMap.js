// import './GoogleMaps.css';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

// export default function HomeMap() {


//     return (
//         <>
//             <div id="googleMaps"></div>
//         </>
//     )
// }
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const HomeMap = () => {

    const mapStyles = {
        height: "25vh",
        width: "100%"
    };

    const ahaduLocation = {
        lat: 38.93940481483486, lng: -94.37633942221444
    }

    return (
        <LoadScript id='googleMaps'
            googleMapsApiKey='AIzaSyDqBCgtFGob5o7O5jLmjivf6BHnNrWik0k'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={17}
                center={ahaduLocation}
            />
        </LoadScript>
    )
}

export default HomeMap;
