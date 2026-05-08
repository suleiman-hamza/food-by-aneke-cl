import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // This is the key!
    children: [
      {
        index: true, // This renders at "/"
        element: <Home />,
      },
      {
        path: "about", // This renders at "/about"
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
