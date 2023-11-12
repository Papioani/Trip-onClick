import React from "react"
import { useNavigate } from "react-router-dom";

export default function Contact() {
  let navigate = useNavigate();

  const handleClick =() => {
    navigate("/contact")
  }

    return (
      <div style={{color: "green"}} >
      <button onClick={handleClick}>Contact</button>
      </div>
    )
  }