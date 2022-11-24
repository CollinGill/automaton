interface DarkButtonType {
  text: string;
  onClick: () => void;
}

const DarkButton = ({ text, onClick }: DarkButtonType) => {
  return (
    <button
      onClick={onClick}
      className="text-gray-400 border border-indigo-500 m-auto px-2 py-1 rounded-md hover:bg-gray-700"
    >
      {text}
    </button>
  );
};

export default DarkButton;
