import React, { createContext, useState } from "react";

// Create the context
export const TripContext = createContext();

// Create a provider component
export const TripProvider = ({ children }) => {
  const EMPTY_FORM = { checkIn: "", checkOut: "" };

  const [hotelParameters, setHotelParameters] = useState(EMPTY_FORM);
  const [adultCount, setAdultCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  // Create the values to pass to context consumers
  const value = {
    hotelParameters,
    setHotelParameters,
    adultCount,
    setAdultCount,
    roomCount,
    setRoomCount,
    showAlert,
    setShowAlert,
  };

  // Provide the context to children components
  return <TripContext.Provider value={value}>{children}</TripContext.Provider>;
};
