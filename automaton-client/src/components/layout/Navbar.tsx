const Navbar = () => {
  return (
    <div className="px-3 bg-gray-900 w-screen h-auto">
      <nav className="flex">
        {/* TODO: set up links to other pages */}
        <a className="text-gray-400 px-2 py-1 hover:underline underline-offset-4">
          Automaton
        </a>
        <a className="text-gray-400 px-2 py-1 hover:underline underline-offset-4">
          About
        </a>
        <a className="text-gray-400 px-2 py-1 hover:underline underline-offset-4">
          Login/Signup
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
