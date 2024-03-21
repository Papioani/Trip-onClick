import React, { useEffect, useState } from "react";
import SpainMapComponent from "./SpainMapComponent";
import ManiPlacesList from "./ManiPlacesList";

function FrontendRooms() {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "693a320c7amshf8a3f0479327cbap12dca4jsn254f4f98016a",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
    };
    fetch(
      "https://hotels4.p.rapidapi.com/locations/v3/search?q=USA&locale=en_US&langid=1033&siteid=300000001",
      options
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const HotelsListObjects = data.sr.map((object) => ({
          latitude: object.coordinates.lat,
          longitude: object.coordinates.long,
          index: object.index,
          regionalName: object.regionNames.displayName,
        }));

        setHotels(HotelsListObjects);
        console.log(HotelsListObjects);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div>{console.log(hotels)}</div>
      <ManiPlacesList hotels={hotels} />
    </div>
  );
}

export default FrontendRooms;
