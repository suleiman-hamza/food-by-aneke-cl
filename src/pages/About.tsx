import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Register the hook as a plugin to prevent any React scope issues
gsap.registerPlugin(useGSAP);

export default function About() {
  const container = useRef(null);

  // useGSAP replaces useLayoutEffect/useEffect completely
  useGSAP(
    () => {
      // Any animations here are safely scoped and auto-cleaned up!
      gsap.to(".box", { rotation: 27, x: 100, duration: 1 });
      //assumes that an effect named "explode" has already been registered
    },
    { scope: container },
  ); // <-- Safely restricts selectors to this component

  return (
    <div ref={container}>
      <p>Welcome to my About page</p>
      <span className="box inline-block border p-4 rounded-md bg-indigo-400">
        This is a box element
      </span>
    </div>
  );
}
