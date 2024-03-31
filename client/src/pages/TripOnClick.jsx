import React from "react";
import { useEffect } from "react";
import "../../styles/TripOnClick.css";
import VideoPlayerComponent from "../components/VideoPlayerComponent";
import TripParameters from "../components/TripParameters";

export default function TripOnClick() {
  /*  useEffect(() => { */
  // Set the background image when the component mounts
  /* document.body.style.backgroundImage =
      'url("https://images.unsplash.com/photo-1511028931355-082bb4781053?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed"; */
  // Cleanup function to reset the background when the component unmounts
  /* return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundAttachment = "";
    };
  }, []); */

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
          <TripParameters />
        </div>
      </div>
    </div>
  );
}
