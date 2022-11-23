import Navbar from "../components/layout/Navbar";

const Login = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="py-3" />
      <div className="flex flex-col m-auto md:w-80 md:h-96 bg-gray-800 rounded-2xl border-solid border-4 border-gray-900">
        <form>
          <div className="flex flex-col px-2">
            <label className="py-4 text-gray-400">Username</label>
            <input className="px-1 bg-gray-800 border-b border-indigo-500 focus:outline-none focus:border focus:rounded-md text-gray-400"></input>
          </div>
          <div className="flex flex-col px-2">
            <label className="py-4 text-gray-400">Password</label>
            <input className="px-1 bg-gray-800 border-b border-indigo-500 focus:outline-none focus:border focus:rounded-md text-gray-400"></input>
          </div>
        </form>
        <div className="py-3" />
        <button className="text-gray-400 border border-indigo-500 m-auto px-2 py-1 rounded-md hover:bg-gray-700">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
