import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/JU_logo.png";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <nav className="navbar fixed top-0 left-0 z-50 flex w-full shadow-[0_0_5px_gray] px-4 bg-[#ff0000] text-white">
      <ul className="nav-list flex w-full h-16 items-center justify-between">
        <li className="nav-item-1 h-fit">
          <img
            src={logo}
            alt="JECRC_logo"
            className="w-full h-15 clip-path-circle"
          />
        </li>
        <li className="nav-item-2 h-fit">
          {user ? (
            <span onClick={handleLogout} className="text-2xl font-medium cursor-pointer">Logout</span>
          ) : (
            <Link to="/" className="text-2xl font-medium">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
