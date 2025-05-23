import { Link } from "react-router-dom";
import LoginComponent from "./LoginComponent";

const NormalLogin = () => {

  return (
    <div className="login-container w-full h-[100vh] place-items-center place-content-center">
      <div className="flex flex-col items-center gap-6 py-8 px-6 shadow-[0_0_5px_grey] bg-white rounded-lg text-center">
        <LoginComponent />
        <span>
          <Link
            to="/register"
            className="text-gray-600 font-medium hover:text-gray-700"
          >
            Create new account
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NormalLogin;
