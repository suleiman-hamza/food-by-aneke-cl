import FoodBanner from "../assets/images/food-banner.jpg";
import DineBanner from "../assets/images/dine-banner.jpg";
import ForageBanner from "../assets/images/forage-banner.jpg";
import { Link } from "react-router";
import { useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const headingSplit = SplitText.create(".hero-heading", {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          self.lines.forEach((line) => {
            if (line.parentElement) line.parentElement.style.paddingBottom = "0.15em";
          });
          gsap.from(self.lines, {
            yPercent: 100,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          });
        },
      });

      // const subtextSplit = SplitText.create(".hero-subtext", {
      //   type: "lines",
      //   mask: "lines",
      //   autoSplit: true,
      //   onSplit(self) {
      //     self.lines.forEach((line) => {
      //       if (line.parentElement) line.parentElement.style.paddingBottom = "0.15em";
      //     });
      //     gsap.from(self.lines, {
      //       yPercent: 100,
      //       duration: 0.8,
      //       delay: 0.25,
      //       stagger: 0.15,
      //       ease: "power3.out",
      //     });
      //   },
      // });

      return () => {
        headingSplit.revert();
        // subtextSplit.revert();
      };
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex flex-col lg:flex-row justify-between bg-[#1f2421] text-white"
    >
      <Link
        to="#"
        className="flex-1 w-full h-full flex justify-center items-center relative p-6 text-center group transition-all duration-300 ease-in-out hover:flex-[1.5]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 opacity-70"
          style={{ backgroundImage: `url(${FoodBanner})` }}
        ></div>
        <div className="z-11 max-w-75">
          <h2 className="hero-heading text-[24px] md:text-[48px] font-alonira">Food</h2>
          <p className="hero-subtext font-mostra text-[18px] sm:text-[20px]">
            Amazing food for special occasions prepared with love
          </p>
        </div>
      </Link>
      <Link
        to="#"
        className="flex-1 w-full flex justify-center items-center relative p-6 text-center transition-all duration-300 ease-in-out hover:flex-[1.5]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 opacity-70"
          style={{ backgroundImage: `url(${DineBanner})` }}
        ></div>
        <div className="z-11 max-w-70">
          <h2 className="hero-heading text-[24px] md:text-[48px] mb-2 font-alonira">Dine</h2>
          <p className="hero-subtext font-mostra text-[18px] sm:text-[20px]">
            Reserve a seat at Forage The Pop-up
          </p>
        </div>
      </Link>
      <Link
        to="#"
        className="flex-1 w-full flex justify-center items-center relative p-6 text-center transition-all duration-300 ease-in-out hover:flex-[1.5]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 opacity-70"
          style={{ backgroundImage: `url(${ForageBanner})` }}
        ></div>
        <div className="z-11 max-w-75">
          <h2 className="hero-heading text-[24px] md:text-[48px] mb-2 font-alonira">FORAGE</h2>
          <p className="hero-subtext font-mostra text-[18px] sm:text-[20px]">
            Forage, cook, & dine experiences with Aneke
          </p>
        </div>
      </Link>
    </section>
  );
}
