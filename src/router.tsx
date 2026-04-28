import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
