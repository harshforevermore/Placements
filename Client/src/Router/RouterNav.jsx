import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../Auth/Register";
import Dashboard from "../Pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import { AuthContext } from "../Context/AuthContext";
import LoginPage from "../Auth/LoginPage";
// import Loader from "../Components/Loader/Loader";

const RouterNav = () => {
  // const {user} = useContext(AuthContext);

  return (
    <>
      <Routes>
        {/* Redirecting "/" route to /login */}
        {/* <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} /> */}

        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/loader" element={<Loader />} /> */}

        {/* Nesting the routes that require login inside "ProtecedRoute" */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouterNav;
