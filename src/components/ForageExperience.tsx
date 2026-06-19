import SvgImage from "../assets/images/logo-forage-with-aneke-background.svg";
import ForageExp from "../assets/images/the-experience.jpg";

import { Link } from "react-router";

export default function ForageExperirnce() {
  return (
    <>
      <section className="forage-sections">
        <div className="container border border-red-500 flex flex-col md:flex-row">
          <a href="#" className="md:grid md:grid-cols-12 relative">
            <div className="md:col-span-6 md:absolute -right-35 w-full md:w-[calc(50vw+140px)] h-[70vh]">
              <img src={ForageExp} alt="foreage-the-experience" className="object-cover w-full" />
            </div>
            <section className="py-10 bg-[#344e41] col-span-6 md:translate-y-20">
              <div className="container text-center">
                <img src={SvgImage} alt="svg the experience logo" className="w-25 h-25 mx-auto" />
                <p className="text-white my-4 text-center">
                  Walking in small groups with home-made, freshly foraged refreshments and a highly
                  experienced guide, and then back to the paddock to cook lunch inspired by the
                  day’s foraging.
                </p>
                <Link
                  to="#"
                  className="text-center w-fit font-alonira text-white hover:text-[#a3b18a] mx-auto flex gap-3 items-center group mb-2"
                >
                  <span className="leading-none text-[12px] md:text-[16px] tracking-[3%]">
                    LEARN MORE
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </Link>
              </div>
            </section>
          </a>
        </div>
      </section>
    </>
  );
}
