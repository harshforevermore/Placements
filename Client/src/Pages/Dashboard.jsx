import React, { useContext, useState } from "react";
import SidePanel from "../Components/SidePanel";
import Profile from "./Profile";
import Details from "./Details";
import StudentAssignmentList from "./studentAssignmentList";
import { AuthContext } from "../Context/AuthContext";
import AdminMain from "./AdminMain";
import AdminControls from "../Components/Admin Components/AdminControls";
import AdminDashboard from "./AdminDashboard";

const Dashboard = () => {
  const { userType } = useContext(AuthContext);
  const [displayScreen, setDisplayScreen] = useState(userType === "student" ? "Profile" : "Admin");

  return (
    <div className="dashboard-container min-h-[calc(100vh-64px)] flex">
      <SidePanel userType={userType} displayScreen={setDisplayScreen} />
      <div className="dash-screen flex-1 py-2 px-2">
        {userType === "student" ? (
          <>
            {displayScreen === "Profile" && <Profile />}
            {displayScreen === "Student Info" && <Details />}
            {displayScreen === "Document Upload" && <StudentAssignmentList/>}
          </>
        ) : (
          <>
            {displayScreen === "Admin" && <AdminMain />}
            {displayScreen === "Controls" && <AdminControls />}
             {displayScreen === "Document" && <AdminDashboard/>}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
