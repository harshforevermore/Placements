import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../Auth/Register";
import Dashboard from "../Pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import { AuthContext } from "../Context/AuthContext";
import LoginPage from "../Auth/LoginPage";
import Profile from "../Pages/Profile";
import AdminMain from "../Pages/AdminMain";
import AdminControls from "../Components/Admin Components/AdminControls";
import StudentMain from "../Pages/StudentMain";

const RouterNav = () => {
  const { user, userType } = useContext(AuthContext);

  return (
    <>
      <Routes>
        {/* Redirecting "/" route to /login */}
        <Route
          path="/"
          element={
            user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
          }
        />

        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" replace /> : <LoginPage />}
        />
        <Route path="/register" element={<Register />} />

        {/* Nesting the routes that require login inside "ProtecedRoute" */}
        <Route element={<ProtectedRoute />}>
          {userType === "admin" && (
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Navigate to="admin" />} />
              <Route path="admin" element={<AdminMain />} />
              <Route path="adminControls" element={<AdminControls />} />
            </Route>
          )}

          {userType === "student" && (
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Navigate to="profile" />} />
              <Route path="profile" element={<Profile />} />
              <Route path="studentInfo" element={<StudentMain />} />
            </Route>
          )}
        </Route>
      </Routes>
    </>
  );
};

export default RouterNav;
