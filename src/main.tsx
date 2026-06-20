// main.tsx
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "./router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";

gsap.registerPlugin(useGSAP);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
