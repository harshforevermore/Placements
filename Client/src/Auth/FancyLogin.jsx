import LoginComponent from "./LoginComponent";

const FancyLogin = ({setShow}) => {

  const handleFormChange = () => {
    setShow("register");
    // reset();
  }

  return (
    <div className="login-container h-fit place-items-center place-content-center">
      <div className="flex flex-col items-center gap-6 py-8 px-6 bg-white text-center">
        <LoginComponent fancy="fancy" />
        <span onClick={handleFormChange} className="cursor-pointer text-gray-600 font-medium hover:text-gray-700">
            Create new account
        </span>
      </div>
    </div>
  );
};

export default FancyLogin;
