// components/CursorFollow.tsx
import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface CursorFollowProps {
  children: ReactNode;
  className?: string;
  cursorLabel?: string;
}

const CursorFollow = ({ children, className = "", cursorLabel = "View" }: CursorFollowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const cursor = cursorRef.current;
      if (!container || !cursor) return;

      // center the cursor on its own point and spin it forever
      gsap.set(cursor, { xPercent: -50, yPercent: -50 });
      gsap.to(cursor, { rotation: 360, repeat: -1, duration: 3, ease: "none" });

      const xTo = gsap.quickTo(cursor, "x", {
        duration: 0.5,
        ease: "power3",
      });
      const yTo = gsap.quickTo(cursor, "y", {
        duration: 0.5,
        ease: "power3",
      });

      const handleMouseMove = (e: MouseEvent) => {
        const bounds = container.getBoundingClientRect();
        xTo(e.clientX - bounds.left);
        yTo(e.clientY - bounds.top);
      };

      const handleEnter = () =>
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
        });

      const handleLeave = () =>
        gsap.to(cursor, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power3.out",
        });

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleEnter);
      container.addEventListener("mouseleave", handleLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleEnter);
        container.removeEventListener("mouseleave", handleLeave);
      };
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={`relative cursor-none ${className}`}>
      {children}

      <div
        ref={cursorRef}
        className="pointer-events-none absolute top-0 left-0 z-50 flex h-20 w-20 scale-0 items-center justify-center rounded-full bg-white text-xs font-medium text-black opacity-0"
      >
        {cursorLabel}
      </div>
    </div>
  );
};

export default CursorFollow;
