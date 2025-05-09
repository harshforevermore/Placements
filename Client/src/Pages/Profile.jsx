import React from "react";

const Profile = () => {
  const userDetails = JSON.parse(sessionStorage.getItem("user"));

  return userDetails ? (
    <div className="wrapper w-full h-full p-3 shadow-[0_0_5px_gray] rounded-lg">
    <div className="profile-container w-full h-full p-3 border-2">
      <div className="user-profile-picture w-32 h-40 bg-gray-300 float-right"></div>
      <p className="text-2xl">Name: {userDetails.fullname}</p>
      <p className="text-xl">Roll No.: {userDetails.regNo}</p>
      <p className="text-xl">Course: {userDetails.course}</p>
      <p className="text-xl">Email: {userDetails.email}</p>
    </div>
    </div>
  ) : (
    <></>
  );
};

export default Profile;
