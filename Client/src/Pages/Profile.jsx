import React from "react";

const Profile = () => {
  const userDetails = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="wrapper w-full h-full p-3 shadow-[0_0_5px_gray] bg-white rounded-lg">
      {userDetails ? (
        <div className="profile-container w-full h-full p-3 ">
          <h1 className="heading mb-5 text-3xl text-red-500 font-medium">User Profile</h1>
          <div className="user-profile-picture w-32 h-40 bg-gray-300 float-right"></div>
          <p className="text-xl text-gray-600 font-medium">Name: <span className="text-gray-800 font-medium">{userDetails.fullname}</span></p>
          <p className="text-xl text-gray-600 font-medium">Roll No.: <span className="text-gray-800 font-medium">{userDetails.regNo}</span></p>
          <p className="text-xl text-gray-600 font-medium">Course: <span className="text-gray-800 font-medium">{userDetails.course}</span></p>
          <p className="text-xl text-gray-600 font-medium">Section: <span className="text-gray-800 font-medium">{userDetails.section}</span></p>
          <p className="text-xl text-gray-600 font-medium">Email: <span className="text-gray-800 font-medium">{userDetails.email}</span></p>
        </div>
      ) : (
        <div className="nothing-here h-full flex items-center justify-center">
          <span className="text-4xl text-stone-400">Nothing To See Here</span>
        </div>
      )}
    </div>
  );
};

export default Profile;
