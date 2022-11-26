interface DropDownStatesProps {
  text: string;
  stateNames: string[];
}

// TODO: make a drop down button
const DropDownStates = ({ text, stateNames }: DropDownStatesProps) => {
  return (
    <div className="relative inline-block text-left py-4">
      <div className="flex py-1 px-2 justify-center items-center w-full border border-indigo-500 rounded-md shadow-sm outline-none appearance-none">
        <div className="relative inline-block text-left">
          <select className="w-full bg-transparent">
            <option>{text}</option>
            {stateNames.map((element) => (
              <option>{element}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DropDownStates;
