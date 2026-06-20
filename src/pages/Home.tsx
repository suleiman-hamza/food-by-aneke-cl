import Hero from "../components/Hero";

import ProfileScribble from "../assets/images/profile-photo-scribble.svg";
import ProfilePhoto from "../assets/images/profile-picture.jpg";

// import accreditation images
import Biiab from "../assets/images/accreditation-BIIAB.jpg";
import FHrating from "../assets/images/accreditation-Food-Hygeine-Rating-5.jpg";
import FineFood from "../assets/images/accreditation-Guild-of-Fine-Food.jpg";
import SurreyLife from "../assets/images/accreditation-Surrey-Life-Food-Drink.jpg";
import Carousel from "../components/Carousel/Carousel";
import { Link } from "react-router";
import ForageExperience from "../components/ForageExperience";
import PopUpDining from "../components/PopUpDining";
import CursorFollow from "../components/CursorFollow";

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
      <ForageExperience />

      {/*pop-up dining*/}
      <PopUpDining />

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
      <CursorFollow cursorLabel="View">
        <Link to="/contact" className="border block py-12 md:py-18 bg-[#eceae5]">
          <div className="container">
            <h2 className="text-center mb-4">
              <em className="text-[#a3b18a] block text-2xl">Lets talk food</em>
              <span className="text-[#344e41] text-[35px] font-alonira">Get in touch</span>
            </h2>
          </div>
        </Link>
      </CursorFollow>
    </>
  );
}
