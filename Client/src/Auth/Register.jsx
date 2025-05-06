import React from "react";
import { Link } from "react-router-dom";
import RegisterComponent from "./RegisterComponent";

const Register = () => {
  return (
    <div className="register-container w-full h-[100vh] place-items-center place-content-center">
      <div className="w-1/2 min-w-[20.5rem] max-w-[40rem] flex flex-col items-center gap-4 py-8 px-6 shadow-[0_0_5px_grey] bg-white rounded-lg text-center">
        <RegisterComponent />
        <span>
          <Link
            to="/login"
            className="text-gray-600 font-medium hover:text-gray-700"
          >
            Already have a account
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;