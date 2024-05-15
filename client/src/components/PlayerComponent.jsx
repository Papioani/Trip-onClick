import ReactPlayer from "react-player";
import React, { useRef } from "react";
const VIDEO_PATH = "/Videos/Video.mp4";

function PlayerComponent() {
  /* The useRef hook is being called, and it initializes the playerRef variable with a reference object.
    The useRef hook returns a mutable object with a .current property that can hold any value. 
    This .current property is initialized with the value passed as an argument to the useRef function.
    The useRef(null) call initializes playerRef with a reference object that has a .current property initialized to null. */
  const playerRef = useRef(null);
  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={VIDEO_PATH}
        loop={true} /* starts over  */
        controls={false} /* the bottom line doesn´t appear  */
        muted={true}
        playing={true} /* starts playing automatically. */
        style={{
          pointerEvents: "none",
        }} /* it disables mouse events (such as hover, click, etc.) 
                     on the specified element and its children */
        width="100%"
        height="auto"
      />
    </div>
  );
}
export default PlayerComponent;
