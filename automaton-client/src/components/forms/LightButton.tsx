import React from "react";

interface LightButtonType {
  text: string;
  onClick: () => void;
}

const LightButton = ({ text, onClick }: LightButtonType) => {
  return (
    <button
      onClick={onClick}
      className="text-gray-900 font-bold border-2 border-indigo-500 m-auto px-2 py-1 rounded-md hover:bg-gray-600"
    >
      {text}
    </button>
  );
};

export default LightButton;
