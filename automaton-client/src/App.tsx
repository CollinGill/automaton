import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
]);

const App = () => {
  return (
    <div className="bg-gray-700 w-screen h-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
