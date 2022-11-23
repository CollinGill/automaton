import React, { useState } from "react";

import Navbar from "../components/layout/Navbar";

interface LogObj {
  uname: string;
  passwd: string;
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

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
    }
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="py-3" />
      <div className="flex flex-col m-auto md:w-80 md:h-96 bg-gray-800 rounded-2xl border-solid border-4 border-gray-900 shadow-md">
        <form>
          <div className="flex flex-col px-2">
            <label className="block py-4 text-gray-400 font-bold">
              Username
            </label>
            <input
              value={username}
              type={"text"}
              onChange={handleUNameChange}
              className="shadow appearance-none w-full py-1 px-3 bg-gray-800 border-b border-indigo-500 focus:outline-none text-gray-400"
            />
          </div>
          <div className="flex flex-col px-2">
            <label className="block py-4 text-gray-400 font-bold">
              Password
            </label>
            <input
              value={password}
              type={"text"}
              onChange={handlePasswordChange}
              className="shadow appearance-none w-full py-1 px-3 bg-gray-800 border-b border-indigo-500 focus:outline-none text-gray-400"
            />
          </div>
        </form>
        <div className="py-3" />
        <button
          onClick={handleSubmit}
          className="text-gray-400 border border-indigo-500 m-auto px-2 py-1 rounded-md hover:bg-gray-700"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
