const Navbar = () => {
  return (
    <div className="px-3 bg-gray-900 w-screen h-auto">
      <nav className="flex">
        {/* TODO: set up links to other pages */}
        <a
          href={"/"}
          className="text-gray-400 px-2 py-1 hover:underline underline-offset-4"
        >
          Automaton
        </a>
        <a
          href={"/login"}
          className="text-gray-400 px-2 py-1 hover:underline underline-offset-4"
        >
          Login
        </a>
        <a
          href={"/signup"}
          className="text-gray-400 px-2 py-1 hover:underline underline-offset-4"
        >
          Signup
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
