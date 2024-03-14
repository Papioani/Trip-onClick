import React from "react";
import Spain from "./images/Spain.png";
import { Routes, Route } from "react-router-dom";
import SpainPage from "../pages/SpainPage";
import { Link } from "react-router-dom";

export default function SpainImagesComponent() {
  return (
    <div>
      <Link to="/spain">
        <img src={Spain} class="figure-img img-fluid rounded" />
      </Link>

      {/*  {imageList.map((image) => (  //used {} to embed JavaScript  
            <div key={image.id} className="image-box">
              <img src={image.src} alt={image.name} />
            </div>
          ))}  */}

      <Routes>
        <Route path="/spain" element={<SpainPage />} />
      </Routes>
    </div>
  );
}
