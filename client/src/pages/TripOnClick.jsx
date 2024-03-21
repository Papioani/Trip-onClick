import React from "react";
import "../components/TripOnClick.css";
import VideoPlayerComponent from "../components/VideoPlayerComponent";

export default function TripOnClick() {
  return (
    <div class="full-page">
      <header className="header">
        <h1>No plan, no trip? ...clicK 🚗</h1>
      </header>
      <VideoPlayerComponent />
    </div>
  );
}
