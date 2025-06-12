import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { useLoader } from "../Context/LoaderContext";
import { useNotification } from "../Context/NotificationContext";
import {fakeAdmin} from "../Data/data.js";

const LoginComponent = ({ fancy }) => {
  // useContext hook
  const { login } = useContext(AuthContext);
  const {showNotification} = useNotification();
  const {showLoader, hideLoader} = useLoader();

  // useNavigate hook
  const navigate = useNavigate();

  // useForm hook
  const {
    register,
    // watch,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: "onChange"});

  //UseState hooks
  const [userNotFound, setUserNotFound] = useState(false);

  function showUserNotFound() {
    setUserNotFound(true);
    setTimeout(() => {
      setUserNotFound(false);
    }, 3000);
  }

  const onSubmit = (data) => {
    showLoader();
    if(data.username == "oresama" && data.password == "oresama") {
      login(fakeAdmin);
      navigate("/home");
      hideLoader();
      showNotification("Logged in Successfully", "success");
    }
    else {
      hideLoader();
      showNotification("Couldn't login", "error");
    }
  }
  // const onSubmit = async (data) => {
  //   showLoader();
  //   try {
  //     const userData = {
  //       regNo: data.username,
  //       password: data.password,
  //     };
  //     const response = await axios.post(
  //       "https://placment-b9e0ckhua7fpemgq.eastus2-01.azurewebsites.net/studentlogin",
  //       JSON.stringify(userData),
  //       {
  //         headers: { "Content-type": "application/json" },
  //       }
  //     );
  //     if(response.status == 404) {
  //       showUserNotFound();
  //       throw new Error(`User Not Found!`);
  //     }
  //     else if (!(response.status >= 200 && response.status < 300)) {
  //       throw new Error(
  //         `Server Error: ${response.status}, ${response.statusText}`
  //       );
  //     }
  //     console.info("worked");
  //     showNotification("Logged In Successfully", "success");
  //     login(response.data);
  //     navigate("/home");
  //     hideLoader();
  //     console.log(response);
  //   } catch (err) {
  //     console.error("Error: ", err);
  //     showNotification(err.message, "error");
  //     hideLoader();
  //   }
  // };

  const requiredMessage = "This Field is Required";

  return (
    <>
      <h1 className="text-4xl font-bold text-[#ff0000] mb-4">Login</h1>
      {userNotFound && (
        <span className="userNotFound w-fit py-0.5 px-2 rounded-md bg-[#ff0000] text-xl text-white font-bold animate-reveal">
          user not found
        </span>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="username-container flex flex-col">
          <input
            {...register("username", {
              required: requiredMessage,
              // minLength: { value: 10, message: "Invalid Length" },
              // pattern: {
              //   value:
              //     /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[0-9]{2}[a-zA-Z]{4}\d{4})$/,
              //   message: "Enter reg.no. or email",
              // },
            })}
            className={`p-2 text-lg border-2 border-gray-600 rounded-md hover:border-b-2 focus:shadow-[0_0_5px_gray] focus:outline-none
              ${errors.username ? "border-red-600" : "border-gray-500"}`}
            id={`${fancy}-username-field`}
            placeholder="Username"
            autoComplete="off"
          />
          {errors.username && (
            <span className="text-sm text-red-600 text-center ">
              {errors.username.message}
            </span>
          )}
        </div>
        <div className="password-container flex flex-col">
          <input
            {...register("password", {
              required: requiredMessage,
              // minLength: {
              //   value: 5,
              //   message: "Minimum 5 characters required",
              // },
              // maxLength: {
              //   value: 15,
              //   message: "Maximum 15 characters required",
              // },
              // pattern: {
              //   value: /^(?=.*[A-Z])(?=.*\d).{5,15}$/,
              //   message: "Invalid Format!",
              // },
            })}
            className={`p-2 text-lg border-2 border-gray-600 rounded-md hover:border-b-2 focus:shadow-[0_0_5px_gray] focus:outline-none
              ${errors.password ? "border-red-600" : "border-gray-500"}`}
            type="password"
            id={`${fancy}-password-field`}
            placeholder="Password"
            autoComplete="off"
          />
          {errors.password && (
            <span className="text-sm text-red-600 text-center">
              {errors.password.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#ff0000] text-white font-medium text-2xl py-2 rounded-md mt-6 cursor-pointer hover:bg-red-600 focus:bg-red-600 active:bg-[#ff0000]"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginComponent;
