import React from "react";
import "../components/TripOnClick.css";
import VideoPlayerComponent from "../components/VideoPlayerComponent";
import Requirements from "../components/Requirements";

export default function TripOnClick() {
  return (
    <div className="full-page">
      <header className="header">
        <h1 className="h1">
          No plan, no trip? <span className="click-word">...clicK</span>
        </h1>
      </header>
      <div className="split-screen">
        <div className="left-panel">
          <VideoPlayerComponent />
        </div>
        <div className="right-panel">
          <Requirements />
        </div>
      </div>
    </div>
  );
}
