import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DarkButton from "../components/forms/DarkButton";
import FormInput from "../components/forms/FormInput";

interface SignupObj {
  uname: string;
  passwd: string;
}

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passconf, setPassconf] = useState("");
  const navigate = useNavigate();

  const handleUNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handlePassconfChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassconf(event.currentTarget.value);
  };

  const handleSubmit = () => {
    if (username === "" || password === "" || passconf === "") {
      console.error("Form not filled");
    } else if (password !== passconf) {
      console.error("Password and password confirmation are not the same");
    } else {
      const signupPayload: SignupObj = {
        uname: username,
        passwd: password,
      };

      setUsername("");
      setPassword("");
      setPassconf("");

      // TODO: set loginpayload to backend when setup and update return value, redirect to account if success
      console.log(signupPayload);
      navigate("/signup/success");
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
              type={"text"}
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
          <div className="flex flex-col px-2">
            <label className="block py-4 text-gray-400 font-bold">
              Password Confirmation
            </label>
            <FormInput
              value={passconf}
              type={"password"}
              onChange={handlePassconfChange}
            />
          </div>
        </form>
        <div className="py-3" />
        <DarkButton text={"Signup"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Signup;
