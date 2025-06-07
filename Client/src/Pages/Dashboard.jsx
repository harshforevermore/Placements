import React, { useContext, useEffect, useState } from "react";
import SidePanel from "../Components/SidePanel";
import Profile from "./Profile";
import Details from "./Details";
import { AuthContext } from "../Context/AuthContext";
import AdminMain from "./AdminMain";
import AdminControls from "../Components/Admin Components/AdminControls";
import Loader from "../Components/Loader/Loader";

const Dashboard = () => {
  const { userType } = useContext(AuthContext);
  const [displayScreen, setDisplayScreen] = useState(userType === "student" ? "Profile" : "Admin");

  if(!userType) {
    return <Loader />;
  }
  return (
    <div className="dashboard-container min-h-[calc(100vh-64px)] flex">
      <SidePanel userType={userType} displayScreen={setDisplayScreen} />
      <div className="dash-screen flex-1 py-2 px-2">
        {userType && userType === "student" ? (
          <>
            {displayScreen === "Profile" && <Profile />}
            {displayScreen === "Student Info" && <Details />}
          </>
        ) : (
          <>
            {displayScreen === "Admin" && <AdminMain />}
            {displayScreen === "Controls" && <AdminControls />}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
