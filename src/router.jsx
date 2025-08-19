import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Blog from "./pages/Blog/Blog";
import Register from "./pages/Forms/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },

      { path: "/blog", element: <Blog /> },

      { path: "/register", element: <Register /> },
    ],
  },
]);
