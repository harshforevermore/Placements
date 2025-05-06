import React, { useState } from "react";
import FancyLogin from "./FancyLogin";
import FancyRegister from "./FancyRegister";
import LoginCover from "../Components/Form Components/LoginCover";

const FancyAuth = () => {
  const [show, setShow] = useState("login");
  return (
    <div className="fancy-login-container h-[100vh] place-items-center place-content-center">
      <div className="form-container relative h-fit flex gap-4 bg-white p-4 shadow-[0_0_5px_gray] rounded-lg">
        <section className="login-container place-content-center">
          <FancyLogin setShow={setShow} />
        </section>
        <section className="registration-container place-content-center">
          <FancyRegister setShow={setShow} />
        </section>
        <section className={`z-99 absolute top-0 ${show === "login" ? 'translate-x-[98%]' : 'translate-x-[-5%]'}
                w-1/2 h-full place-items-center place-content-center shadow-[0_0_5px_gray] 
                bg-[#d70018] rounded-lg transition-all duration-150 ease-linear`}> 
          <LoginCover show={show} />
        </section>
      </div>
    </div>
  );
};

export default FancyAuth;
