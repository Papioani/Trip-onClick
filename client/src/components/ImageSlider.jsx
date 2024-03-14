import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  return (
    <figure class="figure">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        class="figure-img img-fluid rounded"
      />
    </figure>
  );
};

export default ImageSlider;

/* this component is created to make the images in the TripsComponent slide
it is imported to the ManiImagesComponent.jsx where the Mani photos are handled */
