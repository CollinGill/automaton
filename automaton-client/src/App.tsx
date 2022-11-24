import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import Signup from "./pages/Signup";
import SignupSuccess from "./pages/SignupSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/Signup/Success",
    element: <SignupSuccess />,
  },
]);

const App = () => {
  return (
    <div className="bg-gray-700 w-screen h-screen">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
