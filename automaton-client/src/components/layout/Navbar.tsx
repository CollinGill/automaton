const Navbar = () => {
  return (
    <div className="px-3 bg-gray-900 w-screen h-auto">
      <nav className="flex">
        <a href={"/"} className="navbar-link">
          Automaton
        </a>
        <a href={"/login"} className="navbar-link">
          Login
        </a>
        <a href={"/signup"} className="navbar-link">
          Signup
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
