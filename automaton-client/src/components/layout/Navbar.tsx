const Navbar = () => {
  return (
    <div className="px-3 bg-gray-900 w-screen h-auto">
      <nav className="flex">
        {/* TODO: set up links to other pages */}
        <a
          href={"/"}
          className="text-gray-400 px-2 py-1 decoration-indigo-500 underline-offset-4 hover:underline"
        >
          Automaton
        </a>
        <a
          href={"/login"}
          className="text-gray-400 px-2 py-1 decoration-indigo-500 underline-offset-4 hover:underline"
        >
          Login
        </a>
        <a
          href={"/signup"}
          className="text-gray-400 px-2 py-1 decoration-indigo-500 underline-offset-4 hover:underline"
        >
          Signup
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
