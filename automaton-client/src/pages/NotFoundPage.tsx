import { useNavigate } from "react-router-dom";
import LightButton from "../components/forms/LightButton";

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
      <LightButton text={"Return home"} onClick={handleClick} />
    </div>
  );
};

export default NotFoundPage;
