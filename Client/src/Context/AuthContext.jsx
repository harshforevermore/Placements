import { useState, useEffect, createContext } from "react";
import { fakeAdmin, fakeStudents } from "../Data/data";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // getting the user from the local storage(if exists!) on page reload.
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    try {
      if (storedUser) {
        setUser(storedUser);
        setUserType(storedUser.userType);
      }
    } catch (err) {
      console.error("Error while parsing stored user: ", err);
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("userDetails");
    }
    setLoading(false);
  }, []);

  function getUserDetails(data) {
    let userDetails;
    if(data.userType === "student"){
      userDetails = fakeStudents.find(
        (detail) => detail.rollNo.toLowerCase() === data.username.toLowerCase()
      );
    }
    else {
      userDetails = fakeAdmin.find(detail => detail.email === data.username);
    }
    return userDetails;
  }
  function login(userData) {
    setUserType(userData.userType);
    // setting the user and user details in the local storage
    if (!userData.registeredLogin) {
      setUser(userData);
      sessionStorage.setItem("user", JSON.stringify({username: userData.username, userType: userData.userType}));
      const userDetails = getUserDetails({username: userData.username, userType: userData.userType});
      sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
    } else {
      setUser({ username: userData.username, userType: userData.userType });
      sessionStorage.setItem(
        "user",
        JSON.stringify({ username: userData.username, userType: userData.userType })
      );
      const userDetails = sessionStorage.getItem("registerationData");
      sessionStorage.setItem("userDetails", userDetails);
    }
  }

  function logout() {
    // removing the user data stored in the local storage
    setUser(undefined);
    setUserType("");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("userDetails");
    sessionStorage.removeItem("registerationData");
  }
  return (
    <AuthContext.Provider value={{ user, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};