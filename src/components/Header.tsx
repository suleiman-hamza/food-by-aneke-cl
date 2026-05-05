import Logo from "./Logo";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between gap-4 p-4 border">
      <a href="#" className="border">
        <Logo />
      </a>
      {/* <p>p: {isOpen.toString()}</p> */}
      <div className="border p-1 h-8 flex items-center justify-center">
        <button className="group relative flex flex-col gap-1.5" onClick={() => setIsOpen(!isOpen)}>
          {/* Top Bar */}
          <span
            className={`h-0.5 w-8 bg-black transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>

          {/* Middle Bar */}
          <span
            className={`h-0.5 w-8 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>

          {/* Bottom Bar */}
          <span
            className={`h-0.5 w-8 bg-black transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>
    </div>
  );
}
