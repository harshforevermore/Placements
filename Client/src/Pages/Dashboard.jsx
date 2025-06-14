import React, { useContext, useState } from "react";
import SidePanel from "../Components/SidePanel";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Components/Loader/Loader";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const { userType } = useContext(AuthContext);

  if(!userType) {
    return <Loader />;
  }
  return (
    <div className="dashboard-container min-h-[calc(100vh-64px)] flex">
      <SidePanel />
      <div className="dash-screen flex-1 py-2 px-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
