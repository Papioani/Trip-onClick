import React from 'react'
import WhereToComponent from '../components/WhereToComponent';
import MapComponent from '../components/MapComponent';
import { useMapEvents } from 'react-leaflet/hooks'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Home() {
  return (
    <div><WhereToComponent/>
         <MapComponent />
    </div>
  )
}
