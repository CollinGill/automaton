import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="py-3" />
      <div className="flex m-auto bg-indigo-500 md:w-9/12 md:h-80 rounded-2xl border-5">
        <p className="m-auto font-bold text-lg">Hello, Automaton</p>
      </div>
    </div>
  );
};

export default Home;
