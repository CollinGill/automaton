import React, { useState } from "react";
import FormInput from "../forms/FormInput";

const CreateProject = () => {
  const [projName, setProjName] = useState("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setProjName(event.currentTarget.value);
  };

  const handleClick = (event: React.FormEvent<HTMLButtonElement>) => {};

  return (
    <div className="flex flex-col w-2/4 h-5/6 m-auto py-1 px-1 bg-gray-700 rounded-2xl border-4 border-gray-900">
      <form>
        <label className="block py-4 text-gray-900 font-bold">
          Project Name
        </label>
        <FormInput value={projName} type={"text"} onChange={handleChange} />
        <button onClick={handleClick}>Create Project</button>
      </form>
    </div>
  );
};

export default CreateProject;
