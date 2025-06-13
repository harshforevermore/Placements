import React from "react";
import PlacementRegistration from "./PlacementRegistration";
import AlreadyRegistered from "../Components/Student Components/AlreadyRegistered";

const Details = () => {
  const placementRegistered = JSON.parse(
    sessionStorage.getItem("user")
  ).placementRegistered;
  return (
    <div className="details-container">
      {placementRegistered ? (
        <AlreadyRegistered />
      ) : (
        <PlacementRegistration />
      )}
    </div>
  );
};

export default Details;
