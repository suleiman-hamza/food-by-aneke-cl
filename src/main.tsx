// main.tsx
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "./router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./index.css";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
