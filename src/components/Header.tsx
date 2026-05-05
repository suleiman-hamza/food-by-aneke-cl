import Logo from "./Logo";
import { useState } from "react";
import { useEffect } from "react"; // Add useEffect to your imports

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Define the dynamic styles based on state
  const menuStyle = {
    height: "100vh", // Or "662px" as per your example
    translate: "none",
    rotate: "none",
    scale: "none",
    visibility: isOpen ? ("visible" as const) : ("hidden" as const),
    opacity: isOpen ? 1 : 0,
    transform: "translate(0px, 0px)",
    transition: "opacity 0.5s ease, visibility 0.5s", // Added for smoothness
  };

  useEffect(() => {
    const handleScroll = () => {
      // If we scroll more than 50px, change the state
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ... inside Header function ...
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md py-2 shadow-sm border-b"
          : "bg-transparent py-4 border-transparent"
      }`}
    >
      <div className="flex p-4 gap- justify-between items-center">
        <a href="#" className="border relative z-60">
          <Logo />
        </a>
        {/* <p>p: {isOpen.toString()}</p> */}
        <div className="border p-1 h-8 flex items-center justify-center relative z-60">
          <button
            className="group relative flex flex-col gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
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

        <nav
          style={menuStyle}
          className="fixed inset-0 z-50 bg-[#1f2421] flex flex-col items-center justify-center overflow-y-auto no-scrollbar"
        >
          {/* Optional: A close button inside the menu if you want one,
      but your hamburger button already handles this! */}

          <div className="flex flex-col items-center gap-8 text-3xl font-bold tracking-tight">
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-600 transition-colors"
            >
              HOME
            </a>
            <a
              href="/menu"
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-600 transition-colors"
            >
              OUR MENU
            </a>
            <a
              href="/orders"
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-600 transition-colors"
            >
              ORDERS
            </a>
            <a
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-600 transition-colors"
            >
              STORY
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
