import PopUpSvg from "../assets/images/logo-forage-pop-up.svg";
import ForagePop from "../assets/images/forage-pop-up.jpg";
import { Link } from "react-router";

export default function PopUpDining() {
  return (
    <>
      <section className="">
        <div className="flex flex-col md:flex-row">
          <a href="/" className="flex flex-col md:grid md:grid-cols-12">
            <section className="order-2 md:order-0 py-10 bg-[#1f2421] col-span-5 col-start-2">
              <div className="text-center px-4">
                <img src={PopUpSvg} alt="svg the pop-up logo" className="w-25 h-25 mx-auto" />
                <h3 className="font-mostra text-white text-[22px] my-4">Next pop-up Date TBA</h3>
                <h2 className="text-white text-[30px] font-alonira">
                  Pop-up <span className="italic text-[#a3b18a] inline-block">Dining</span>
                </h2>
                <p className="text-white my-4 text-center">
                  Walk in, relax, dine. Experience flavours with a twist. creating fabulous,
                  delicious dishes on a tasting menu that will take you on a journey.
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
            <div className="order-1 md:order-0 md:col-span-6 w-full">
              <img
                src={ForagePop}
                alt="foreage-the-experience"
                className="object-cover w-full h-full"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
