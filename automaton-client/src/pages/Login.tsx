import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DarkButton from "../components/forms/DarkButton";
import FormInput from "../components/forms/FormInput";

interface LogObj {
  uname: string;
  passwd: string;
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = () => {
    if (username === "" || password === "") {
      console.error("Login error");
    } else {
      const loginPayload: LogObj = {
        uname: username,
        passwd: password,
      };

      setUsername("");
      setPassword("");

      // TODO: set loginpayload to backend when setup and update return value, redirect to account if success
      console.log(loginPayload);
      navigate("/projects");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="py-3" />
      <div className="flex flex-col m-auto md:w-80 md:h-96 bg-gray-800 rounded-2xl border-solid border-4 border-gray-900 shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col px-2">
            <label className="block py-4 text-gray-400 font-bold">
              Username
            </label>
            <FormInput
              value={username}
              type={"string"}
              onChange={handleUNameChange}
            />
          </div>
          <div className="flex flex-col px-2">
            <label className="block py-4 text-gray-400 font-bold">
              Password
            </label>
            <FormInput
              value={password}
              type={"password"}
              onChange={handlePasswordChange}
            />
          </div>
        </form>
        <div className="py-3" />
        <DarkButton text={"Login"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
