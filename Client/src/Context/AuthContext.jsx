import { useState, useEffect, createContext } from "react";
import { fakeUser } from "../Data/data";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [userType, setUserType] = useState("");

  sessionStorage.setItem("user", JSON.stringify(fakeUser));

  useEffect(() => {
    // getting the user from the local storage(if exists!) on page reload.
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    console.log(storedUser);
    try {
      if (storedUser) {
        setUser(storedUser);
        setUserType(storedUser.role);
      }
    } catch (err) {
      console.error("Error while parsing stored user: ", err);
      sessionStorage.removeItem("user");
    }
  }, []);

  function login(data) {
    setUserType(data.role);
    setUser(data);
    sessionStorage.setItem(
      "user", JSON.stringify(data)
    );
  }

  function logout() {
    // removing the user data stored in the local storage
    setUser(undefined);
    setUserType("");
    sessionStorage.removeItem("user");
  }
  return (
    <AuthContext.Provider value={{ user, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};