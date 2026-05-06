import Hero from "../components/Hero";
import SvgImage from "../assets/images/logo-forage-with-aneke-background.svg";
import PopUpSvg from "../assets/images/logo-forage-pop-up.svg";
import ForagePop from "../assets/images/forage-pop-up.jpg";
import ForageExp from "../assets/images/the-experience.jpg";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-10">
        <div className="container">
          <h2 className="font-alonira text-[24px] text-[#344e41] mb-8">
            An experience to <span>treasure</span>
          </h2>
          <p className="font-mostra text-[20px]">
            We are all about food and how we experience it. We love introducing new flavours,
            ingredients and techniques to people. We are all about food as a sustainable,
            nutricious, enjoyable and sharing event.
          </p>
        </div>
      </section>

      {/*carousel here*/}

      {/*the forage experience*/}
      <div className="w-full">
        <img src={ForageExp} alt="foreage-the-experience" className="object-cover" />
      </div>
      <section className="py-10 bg-[#344e41]">
        <div className="container text-center">
          <img src={SvgImage} alt="svg the experience logo" className="w-25 h-25 mx-auto" />
          <p className="text-white my-4 text-center">
            Walking in small groups with home-made, freshly foraged refreshments and a highly
            experienced guide, and then back to the paddock to cook lunch inspired by the day’s
            foraging.
          </p>
          <a
            href="#"
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
          </a>
        </div>
      </section>

      {/*pop-up dining*/}
      <div className="w-full">
        <img src={ForagePop} alt="foreage-the-experience" className="object-cover" />
      </div>
      <section className="py-10 bg-[#1f2421]">
        <div className="container text-center">
          <img src={PopUpSvg} alt="svg the pop-up logo" className="w-25 h-25 mx-auto" />
          <h3 className="font-mostra text-white text-[22px] my-4">Next pop-up Date TBA</h3>
          <p className="text-white my-4 text-center">
            Walk in, relax, dine. Experience flavours with a twist. creating fabulous, delicious
            dishes on a tasting menu that will take you on a journey.
          </p>
          <a
            href="#"
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
          </a>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container text-center">
          <h2 className="font-alonira text-[24px] text-[#344e41] mb-8 text-center">
            A Passion for <span>Food</span>
          </h2>
          <p className="font-mostra text-[20px]">
            Ever since I can remember, food has been my passion. From experiencing avocados for the
            first time in the 1970s through to foraging for ingredients locally, I still get excited
            about the possibilities and enjoyment that food brings.
          </p>
        </div>
      </section>
      <section className="py-10 bg-[#eceae5]">
        <div className="container">
          <h2 className="text-center mb-4">
            <em className="text-[#a3b18a] block text-2xl">Lets talk food</em>
            <span className="text-[#344e41] text-[35px] font-alonira">Get in touch</span>
          </h2>
          <a
            href="#"
            className="text-center w-fit font-alonira text-[#344e41] hover:text-[#a3b18a] mx-auto flex gap-3 items-center group mb-2"
          >
            <span className="leading-none text-[12px] md:text-[16px] tracking-[3%]">BOOK NOW</span>
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
          </a>
        </div>
      </section>
    </>
  );
}
