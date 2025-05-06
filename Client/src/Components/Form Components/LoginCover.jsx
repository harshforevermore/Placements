import React from "react";
import redLogo from "../../images/red_full.webp";

const LoginCover = () => {
  return (
    <div
      className={`login-cover-container`}
    >
      <img
        src={redLogo}
        alt="JECRC logo"
        className="w-full"
        style={{ clipPath: "inset(10% 2% 10% 10%)" }}
      />
    </div>
  );
};

export default LoginCover;
