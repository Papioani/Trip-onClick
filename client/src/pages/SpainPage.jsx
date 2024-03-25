import React from "react";
import SpainImagesComponent from "../components/SpainImagesComponent";
import MapComponent from "../components/MapComponent";
import HotelsFetchComponent from "../components/HotelsFetchComponent";

export default function SpainPage() {
  return (
    <div class="row">
      <div class="col">
        <div>
          Welcome to Spain
          <div class="vstack gap-3">
            <SpainImagesComponent />
            <HotelsFetchComponent />
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
