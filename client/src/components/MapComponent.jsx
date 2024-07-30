import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../styles/MapComponent.css";
import hotelsjson from "../data/hotels.json";

export default function MapComponent() {
  const filteredHotels = hotelsjson.Hotels.filter(
    (htls) => htls.continent_name === "Europe"
  );
  console.log(filteredHotels);
  return (
    <figure className="figure">
      <MapContainer
        center={[36.8872991185396, 22.233783884471435]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "90vh", width: "90%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filteredHotels.map((htls) => (
          <Marker
            key={htls.hotel_id}
            position={[htls.latitude, htls.longitude]}
          >
            <Popup position={[htls.latitude, htls.longitude]}>
              <div>
                <h2>{"Name : " + htls.hotel_name} </h2>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </figure>
  );
}
