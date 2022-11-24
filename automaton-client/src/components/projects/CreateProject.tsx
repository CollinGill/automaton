import React, { useState } from "react";
import FormInput from "../forms/FormInput";
import LightButton from "../forms/LightButton";

const CreateProject = () => {
  const [projName, setProjName] = useState("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setProjName(event.currentTarget.value);
  };

  const handleClick = () => {
    console.log("Create Project");
  };

  return (
    <div className="flex flex-col justify-center items-center w-2/4 h-5/6 m-auto py-1 px-10 bg-gray-700 rounded-2xl border-4 border-gray-900">
      <label className="block py-4 text-gray-900 font-bold">Project Name</label>
      <FormInput value={projName} type={"text"} onChange={handleChange} />
      <div className="flex m-auto">
        <LightButton text={"Create project"} onClick={handleClick} />
      </div>
    </div>
  );
};

export default CreateProject;
