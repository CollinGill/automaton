import React from "react";

interface FormInputType {
  value: string;
  type: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const FormInput = ({ value, type, onChange }: FormInputType) => {
  return (
    <input
      value={value}
      type={type}
      onChange={onChange}
      className="shadow appearance-none w-full py-1 px-3 bg-gray-800 border-b border-indigo-500 focus:outline-none text-gray-400"
    />
  );
};

export default FormInput;
