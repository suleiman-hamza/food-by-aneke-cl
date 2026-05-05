import Hero from "../components/Hero";
import SvgImage from "../assets/images/logo-forage-with-aneke-background.svg";

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
      <div className="border w-full h-25"></div>
      <section className="py-10 bg-[#344e41]">
        <div className="container border">
          <img src={SvgImage} alt="svg the experience logo" className="w-25 h-25 mx-auto" />
          <p className="text-white mb-4 text-center">
            Walking in small groups with home-made, freshly foraged refreshments and a highly
            experienced guide, and then back to the paddock to cook lunch inspired by the day’s
            foraging.
          </p>
          <a
            href="#"
            className="text-center w-full text-[20px] font-alonira text-white hover:text-[#a3b18a] mx-auto"
          >
            LEARN MORE
          </a>
        </div>
      </section>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolorum eveniet laborum,
        similique accusantium facilis, fugiat nobis vero rerum tempora iusto. Beatae deserunt
        doloribus rem distinctio deleniti numquam doloremque explicabo!
      </p>
    </>
  );
}
