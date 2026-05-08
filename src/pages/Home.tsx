import Hero from "../components/Hero";
import SvgImage from "../assets/images/logo-forage-with-aneke-background.svg";
import PopUpSvg from "../assets/images/logo-forage-pop-up.svg";
import ForagePop from "../assets/images/forage-pop-up.jpg";
import ForageExp from "../assets/images/the-experience.jpg";
import ProfileScribble from "../assets/images/profile-photo-scribble.svg";
import ProfilePhoto from "../assets/images/profile-picture.jpg";

// import accreditation images
import Biiab from "../assets/images/accreditation-BIIAB.jpg";
import FHrating from "../assets/images/accreditation-Food-Hygeine-Rating-5.jpg";
import FineFood from "../assets/images/accreditation-Guild-of-Fine-Food.jpg";
import SurreyLife from "../assets/images/accreditation-Surrey-Life-Food-Drink.jpg";
import Carousel from "../components/Carousel/Carousel";

const accredItems = [
  { id: 1, src: Biiab, title: "Signature Dish" },
  { id: 3, src: FineFood, title: "Fresh Catch" },
  { id: 4, src: SurreyLife, title: "Artisanal Pastry" },
  { id: 2, src: FHrating, title: "Organic Greens" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-lg mx-auto">
            <h2 className="font-alonira text-[24px] md:text-[48px] leading-loose text-[#344e41] mb-8">
              An experience to <span className="italic text-[#a3b18a]">treasure</span>
            </h2>
            <p className="font-mostra text-[20px] md:text-[24px]">
              We are all about food and how we experience it. We love introducing new flavours,
              ingredients and techniques to people. We are all about food as a sustainable,
              nutricious, enjoyable and sharing event.
            </p>
          </div>
        </div>
      </section>

      {/*carousel here*/}
      <Carousel />

      {/*the forage experience*/}
      <section className="flex flex-col md:flex-row">
        <div className="w-full">
          <img
            src={ForageExp}
            alt="foreage-the-experience"
            className="object-cover max-h-75 w-full"
          />
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
      </section>

      {/*pop-up dining*/}
      <section className="flex flex-col md:flex-row">
        <div className="w-full">
          <img
            src={ForagePop}
            alt="foreage-the-experience"
            className="object-cover max-h-75 w-full"
          />
        </div>
        <section className="py-10 bg-[#1f2421]">
          <div className="container text-center">
            <img src={PopUpSvg} alt="svg the pop-up logo" className="w-25 h-25 mx-auto" />
            <h3 className="font-mostra text-white text-[22px] my-4">Next pop-up Date TBA</h3>
            <h2 className="text-white text-[30px] font-alonira">
              Pop-up <span className="italic text-[#a3b18a] inline-block">Dining</span>
            </h2>
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
      </section>
      <section className="py-12 md:py-20 bg-white">
        <div className="container text-center">
          <h2 className="font-alonira text-[24px] text-[#344e41] mb-8 text-center">
            A Passion for <span className="italic text-[#a3b18a]">Food</span>
          </h2>
          <p className="font-mostra text-[20px]">
            Ever since I can remember, food has been my passion. From experiencing avocados for the
            first time in the 1970s through to foraging for ingredients locally, I still get excited
            about the possibilities and enjoyment that food brings.
          </p>
          {/*acreditation*/}
          <div className="relative p-4 w-fit mx-auto mt-4">
            <img
              src={ProfileScribble}
              alt="photo scribble"
              className="absolute w-full h-auto inset-0"
            />
            <div className="relative flex justify-center items-center w-30 h-30">
              <img
                src={ProfilePhoto}
                alt="profile photo of aneke"
                className="w-full rounded-full"
              />
            </div>
            <p>Aneke</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 p-6 w-fit mx-auto">
            {accredItems.map((item) => (
              <div key={item.id} className="group relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-25 object-contain transition-transform duration-500 group-hover:scale-110"
                  // Fallback: If image fails, the background color of the parent div shows
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*get in touch*/}
      <section className="py-12 md:py-18 bg-[#eceae5]">
        <div className="container">
          <h2 className="text-center mb-4">
            <em className="text-[#a3b18a] block text-2xl">Lets talk food</em>
            <span className="text-[#344e41] text-[35px] font-alonira">Get in touch</span>
          </h2>
          <a
            href="/contact"
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
