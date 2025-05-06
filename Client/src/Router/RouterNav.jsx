import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Dashboard from "../Pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import { AuthContext } from "../Context/AuthContext";
import FancyAuth from "../Auth/FancyAuth";

const RouterNav = () => {
  const {user, loading} = useContext(AuthContext);

  if(loading) return <div>Loading...</div>; //prevent rendereing untill the user is initialized

  return (
    <>
      <Routes>
        {/* Redirecting "/" route to /login */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fancyAuth" element={<FancyAuth />} />

        {/* Nesting the routes that require login inside "ProtecedRoute" */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouterNav;
