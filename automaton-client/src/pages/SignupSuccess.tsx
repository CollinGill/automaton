import { Link } from "react-router-dom";

const SignupSuccess = () => {
  return (
    <div className="flex m-auto">
      <p className="text-gray-900 text-xs m-auto py-5 font-semibold decoration-indigo-500">
        Thank you for registering for Automaton! Click{" "}
        <Link
          to="/"
          className="decoration-indigo-500 hover:underline underline-offset-4 font-bold"
        >
          here
        </Link>{" "}
        to return to the homepage and then proceed to login!
      </p>
    </div>
  );
};

export default SignupSuccess;
