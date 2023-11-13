import React from "react"
import { MapContainer } from 'react-leaflet/MapContainer'
import { useEffect } from "react";
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

export default function MapComponent() {
    

  useEffect(() => {
    const map = L.map('map', {
      center: [36.6467, 22.4394],
      zoom: 13
    });

    // Add a marker to the map
    L.marker([36.6467, 22.4394]).addTo(map);
  }, []);

 /*  return <div id="map" style={{ height: '400px' }}></div>; */

return (
  <div> gg

     <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
<TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={[51.505, -0.09]}>
  <Popup>
    A pretty CSS3 popup. <br /> Easily customizable.
  </Popup>
</Marker>
</MapContainer> 
</div>
);
};



