import FoodBanner from "../assets/images/food-banner.jpg";
import DineBanner from "../assets/images/dine-banner.jpg";
import ForageBanner from "../assets/images/forage-banner.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white">
      <a
        href="#"
        className="flex-1 w-full flex justify-center items-center relative p-4 text-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 opacity-70"
          style={{ backgroundImage: `url(${FoodBanner})` }}
        ></div>
        <div className="z-11">
          <h2 className="text-[24px]">Food</h2>
          <p className="">Amazing food for special occasions prepared with love</p>
        </div>
      </a>
      <a
        href="#"
        className="flex-1 w-full flex justify-center items-center relative p-4 text-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 opacity-70"
          style={{ backgroundImage: `url(${DineBanner})` }}
        ></div>
        <div className="z-11">
          <h2 className="text-[24px]">Dine</h2>
          <p className="">Reserve a seat at Forage The Pop-up</p>
        </div>
      </a>
      <a
        href="#"
        className="flex-1 w-full flex justify-center items-center relative p-4 text-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 opacity-70"
          style={{ backgroundImage: `url(${ForageBanner})` }}
        ></div>
        <div className="z-11">
          <h2 className="text-[24px]">FORAGE</h2>
          <p className="">Forage, cook, & dine experiences with Aneke</p>
        </div>
      </a>
    </section>
  );
}
