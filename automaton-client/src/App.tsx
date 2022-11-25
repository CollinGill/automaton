import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Board from "./pages/Board";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import Projects from "./pages/Projects";
import Signup from "./pages/Signup";
import SignupSuccess from "./pages/SignupSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/signup/success",
    element: <SignupSuccess />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/projects/board",
    element: <Board />,
    errorElement: <NotFoundPage />,
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
