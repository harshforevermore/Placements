import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { fakeStudents, fakeAdmin } from "../Data/data";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const LoginComponent = ({fancy}) => {
  // useContext hook
  const { login } = useContext(AuthContext);

  // useNavigate hook
  const navigate = useNavigate();

  // useForm hook
  const {
    register,
    // watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //UseState hooks
  const [userNotFound, setUserNotFound] = useState(false);

  function checkData(data) {
    const rollNoPattern = /[0-9]{2}[a-zA-Z]{4}\d{4}$/;
    if (rollNoPattern.test(data.username)) {
      return true;
    }
    return false;
  }
  function showUserNotFound() {
    setUserNotFound(true);
    setTimeout(() => {
      setUserNotFound(false);
    }, 3000);
  }
  const onSubmit = (data) => {
    if (!checkData(data)) {
      const admin = fakeAdmin.filter(
        (adm) => adm.email === data.username && adm.password === data.password
      );
      if (admin.length > 0) {
        setUserNotFound(false);
        login({ username: admin.at(0).name, userType: "admin" });
        navigate("/home");
      } else {
        showUserNotFound();
      }
      return;
    }
    if (!sessionStorage.getItem("registerationData")) {
      const student = fakeStudents.filter(
        (student) =>
          student.rollNo.toLowerCase() === data.username.toLowerCase() &&
          student.password === data.password
      );
      if (student.length > 0) {
        setUserNotFound(false);
        login({ username: data.username, userType: "student" });
        navigate("/home");
      } else {
        showUserNotFound();
      }
    } else {
      const registerationData = JSON.parse(
        sessionStorage.getItem("registerationData")
      );
      if (
        registerationData.rollNo === data.username &&
        registerationData.password === data.password
      ) {
        setUserNotFound(false);
        login({ username: registerationData.rollNo, userType: "student" , registeredLogin: true });
        navigate("/home");
      }
    }
  };

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
              minLength: { value: 10, message: "Invalid Length" },
              pattern: {
                value:
                  /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[0-9]{2}[a-zA-Z]{4}\d{4})$/,
                message: "Invalid Format",
              },
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
              minLength: {
                value: 5,
                message: "Minimum 5 characters required",
              },
              maxLength: {
                value: 15,
                message: "Maximum 15 characters required",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d).{5,15}$/,
                message: "Invalid Format!",
              },
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
