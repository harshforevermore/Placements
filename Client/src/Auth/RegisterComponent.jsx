import axios from "axios";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../Context/NotificationContext";
import Input from "../Components/Form Components/Input";

const RegisterComponent = () => {
  //useForm hook
  const methods = useForm({ mode: "onChange" });
  const {getValues} = methods;
  const comparePass = (getValues) => (value) => value === getValues("password") || "passwords do not match";
  
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const registerationData = {
      fullName: data.name,
      regNo: data.username,
      collegeEmail: data.email,
      course: data.course,
      section: data.section,
      password: data.password,
      role: "student",
    };
    try {
      const response = await axios.post(
        "https://placment-b9e0ckhua7fpemgq.eastus2-01.azurewebsites.net/studentregister",
        JSON.stringify(registerationData),
        {
          headers: { "Content-type": "application/json" },
        }
      );
      if (response.status >= 200 && response.status < 300) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error.message);
      if (axios.isAxiosError(error)) {
        if (error.response.status == 409) {
          showNotification(error.response.data, "error");
        } else if (error.response) {
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
      <h1 className="text-[2.11em] font-bold text-[#ff0000]">
        Create Account
      </h1>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full form flex flex-col"
        >
          <Input
            name="name"
            label={"Name"}
            minLength={2}
            maxLength={100}
            pattern={/^[A-Za-z ]+$/}
            patternMessage="only alphabets allowed"
          />
          <Input
            name="email"
            label={"Email"}
            type="email"
            pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
            patternMessage="wrong email format"
          />
          <Input
            name="username"
            label={"username(Reg. No.)"}
            minLength={10}
            pattern={/^[0-9]{2}[a-zA-Z]{4}\d{4}$/}
            patternMessage="enter valid reg. no."
          />
          <Input
            name="course"
            label={"Course"}
            minLength={2}
            pattern={/^[A-Za-z]+$/}
            patternMessage="only alphabets allowed"
          />
          <Input
            name="section"
            label={"Section"}
            minLength={1}
            maxLength={1}
            pattern={/^[A-Za-z]+$/}
            patternMessage="only alphabets allowed"
          />
          <Input
            name="password"
            label={"Password"}
            type="password"
            minLength={5}
            maxLength={15}
            pattern={/^(?=.*[A-Z])(?=.*\d).{5,15}$/}
            patternMessage="Invalid"
          />
          <Input
            name="confirmPass"
            label={"Confirm Password"}
            type="password"
            validation={comparePass(getValues)}
            validationMessage="Passwords do not match"
          />
          <button
            type="submit"
            className="bg-[#ff0000] text-white font-medium text-2xl py-2 rounded-md mt-6 cursor-pointer hover:bg-red-600 focus:bg-red-600 active:bg-[#ff0000]"
          >
            Register
          </button>
        </form>
      </FormProvider>
    </>
  );
};

export default RegisterComponent;
