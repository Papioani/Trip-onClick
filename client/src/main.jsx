import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import VideoPlayerComponent from "./components/VideoPlayerComponent.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div>
      <VideoPlayerComponent />
      <App />
    </div>
  </BrowserRouter>
);
