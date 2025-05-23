import React from "react";
import RegisterComponent from "./RegisterComponent";

const FancyRegister = ({setShow}) => {

  const handleFormChange = () => {
    setShow("login");
    // reset();
  }

  return (
    <div className="register-container h-fit place-items-center place-content-center">
      <div className="flex flex-col items-center gap-4 py-2 px-6 bg-white text-center">
        <RegisterComponent />
        <span onClick={handleFormChange} className="cursor-pointer text-gray-600 font-medium hover:text-gray-700">
            Already have a account
        </span>
      </div>
    </div>
  );
};

export default FancyRegister;