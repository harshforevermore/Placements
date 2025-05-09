import axios from "axios";
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  //useForm hook
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const requiredMessage = "This field is required";
  const confirmPassword = watch("password");

  const [serverErr, setServerErr] = useState("");

  function showError(err) {
    if(err) {
      setServerErr(err);
      setTimeout(() => {
        setServerErr("");
      }, 3000);
    }
  }

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const registerationData = {
      fullName: data.name,
      regNo: data.username,
      collegeEmail: data.email,
      course: data.course,
      password: data.password,
      role: "student"
    }
    try {
      const response = await axios.post("http://192.168.182.57:8080/user-register",JSON.stringify(registerationData),{
        headers: {"Content-type": "application/json"}
      });
      if(response.ok) {
        navigate("/login");
      }
    }
    catch(error) {
      console.error("Error:", error.message);
      if(axios.isAxiosError(error)) {
        if(error.response.status == 409) {
          showError(error.response.data);
        }
        else if (error.response) {
          console.log("Error Status:", error.response.status);
          console.log("Error Data:", error.response.data);
        } else {
          console.error("No response from server", error);
        }
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };
  return (
    <>
        <h1 className="text-[2.11em] font-bold text-[#ff0000] mb-4">
          Create Account
        </h1>
        {serverErr && (
        <span className="server-error w-fit py-0.5 px-2 rounded-md bg-[#ff0000] text-xl text-white font-bold animate-reveal">
          {serverErr}
        </span>
      )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full form flex flex-col gap-4"
        >
          <div className="name-container flex flex-col">
            <input
              {...register("name", {
                required: { value: true, message: requiredMessage },
                minLength: { value: 2, message: "Too short" },
                maxLength: { value: 100, message: "Too long" },
                pattern: {
                  value: /^[A-Za-z ]+$/,
                  message: "Only Alphabets allowed",
                },
              })}
              className={`p-2 text-lg border-2 border-gray-600 rounded-md hover:border-b-2 focus:shadow-[0_0_5px_gray] focus:outline-none
                ${errors.name ? "border-red-600" : "border-gray-500"}`}
              id="name-field"
              placeholder="Name"
              autoComplete="off"
            />
            {errors.name && (
              <span className="text-sm text-red-600 text-center">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="email-container flex flex-col">
            <input
              {...register("email", {
                required: { value: true, message: requiredMessage },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid Format",
                },
              })}
              className={`p-2 text-lg border-2 border-gray-600 rounded-md hover:border-b-2 focus:shadow-[0_0_5px_gray] focus:outline-none
                ${errors.email ? "border-red-600" : "border-gray-500"}`}
              id="email-field"
              placeholder="Email"
              autoComplete="off"
            />
            {errors.email && (
              <span className="text-sm text-red-600 text-center">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="username-container flex flex-col">
            <input
              {...register("username", {
                required: requiredMessage,
                minLength: { value: 10, message: "Too short" },
                pattern: {
                  value:
                    /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[0-9]{2}[a-zA-Z]{4}\d{4})$/,
                  message: "Invalid Format",
                },
              })}
              className={`p-2 text-lg border-2 border-gray-600 rounded-md hover:border-b-2 focus:shadow-[0_0_5px_gray] focus:outline-none
              ${errors.username ? "border-red-600" : "border-gray-500"}`}
              id="username-field"
              placeholder="Username(Roll No)"
              autoComplete="off"
            />
            {errors.username && (
              <span className="text-sm text-red-600 text-center ">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="Course-container flex flex-col">
            <input
              {...register("course", {
                required: requiredMessage,
                minLength: { value: 2, message: "Too Short" },
                pattern: {
                  value:
                    /^[A-Za-z]+$/,
                  message: "Only alphabets allowed",
                },
              })}
              className={`p-2 text-lg border-2 border-gray-600 rounded-md hover:border-b-2 focus:shadow-[0_0_5px_gray] focus:outline-none
              ${errors.username ? "border-red-600" : "border-gray-500"}`}
              id="course-field"
              placeholder="Course"
              autoComplete="off"
            />
            {errors.course && (
              <span className="text-sm text-red-600 text-center ">
                {errors.course.message}
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
              id="password-field"
              placeholder="Password"
              autoComplete="off"
            />
            {errors.password && (
              <span className="text-sm text-red-600 text-center">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="confirmPass-container flex flex-col">
            <input
              {...register("confirmPass", {
                required: {
                  value: true,
                  message: "Please confirm your password",
                },
                validate: (value) =>
                  value === confirmPassword || "Passwords do not match",
              })}
              className={`p-2 text-lg border-2 border-gray-600 rounded-md hover:border-b-2 focus:shadow-[0_0_5px_gray] focus:outline-none
              ${errors.password ? "border-red-600" : "border-gray-500"}`}
              type="password"
              id="confirm-password-field"
              placeholder="Confirm Password"
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
            Register
          </button>
        </form>
    </>
  );
};

export default RegisterComponent;