import React from "react";
import SpainImagesComponent from "../components/SpainImagesComponent";
import MapComponent from "../components/MapComponent";
import FrontendRooms from "../components/FrontendRooms";

export default function SpainPage() {
  return (
    <div class="row">
      <div class="col">
        <div>
          Welcome to Spain
          <div class="vstack gap-3">
            <SpainImagesComponent />
            <FrontendRooms />
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
