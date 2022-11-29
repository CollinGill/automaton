import React from "react";

interface DropDownStatesProps {
  text: string;
  stateNames: string[];
  setChosenState: React.Dispatch<React.SetStateAction<string>>;
}

const DropDownStates = ({
  text,
  stateNames,
  setChosenState,
}: DropDownStatesProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setChosenState(event.target.value);
  };

  return (
    <div className="relative inline-block text-left py-4">
      <div className="flex py-1 px-2 justify-center items-center w-full border border-indigo-500 rounded-md shadow-sm outline-none appearance-none">
        <div className="relative inline-block text-left">
          <select className="w-full bg-transparent" onChange={handleChange} defaultValue={text}>
            <option value={text}>
              {text}
            </option>
            {stateNames.map((element) => (
              <option value={element}>{element}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DropDownStates;
