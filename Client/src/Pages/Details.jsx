import React from "react";
import PlacementRegistration from "./PlacementRegistration";

const Details = () => {
  const placementRegistered = JSON.parse(
    sessionStorage.getItem("user")
  ).placementRegistered;
  console.log(placementRegistered);
  return (
    <div className="details-container">
      {placementRegistered ? (
        <p>already registered</p>
      ) : (
        <PlacementRegistration />
      )}
    </div>
  );
};

export default Details;
