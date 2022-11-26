interface DropDownStatesProps {
  text: string;
  stateNames: string[];
}

// TODO: make a drop down button
const DropDownStates = ({ text, stateNames }: DropDownStatesProps) => {
  return (
    <div className="relative inline-block text-left">
      <div className="py-4">
        <button
          className="inline-flex w-full justify-center rounded-md border border-indigo-500 m-auto px-2 py-1 text=gray-400"
          aria-expanded={"true"}
          aria-haspopup={"true"}
        >
          {text}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DropDownStates;
