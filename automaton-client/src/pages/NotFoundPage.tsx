import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col m-auto">
      <p className="text-gray-900 text-xs m-auto py-5 font-semibold decoration-indigo-500">
        Sorry! The page you are looking for doesn't exist.
      </p>
      <button
        onClick={handleClick}
        className="text-gray-900 font-semibold border border-indigo-500 m-auto px-2 py-1 rounded-md hover:bg-gray-900 hover:text-gray-700 shadow-2xl"
      >
        Return home
      </button>
    </div>
  );
};

export default NotFoundPage;
