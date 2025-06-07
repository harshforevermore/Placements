import React from "react";
import PlacementRegistration from "./PlacementRegistration";

const Details = () => {
  const placementRegistered = JSON.parse(
    sessionStorage.getItem("user")
  ).placementRegistered;
  return (
    <div className="details-container h-full py-2 bg-white shadow-[0_0_5px_gray] rounded-lg">
      {placementRegistered ? (
        <p>already registered</p>
      ) : (
        <PlacementRegistration />
      )}
    </div>
  );
};

export default Details;
