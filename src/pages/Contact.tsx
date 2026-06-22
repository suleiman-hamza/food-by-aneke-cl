import ContactBanner from "../assets/images/banner-contact.jpg";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

export default function Contact() {
  useGSAP(() => {
    const split = SplitText.create(".headline", {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit(splitText) {
        splitText.lines.forEach((line) => {
          if (line.parentElement) line.parentElement.style.paddingBottom = "0.15em";
        });
        gsap.from(splitText.lines, {
          yPercent: 100,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        });
      },
    });

    return () => split.revert();
  });

  return (
    <>
      <section
        className="flex flex-col gap-4 justify-center items-center container h-[75vh] md:h-screen text-white text-center bg-cover bg-no-repeat bg-center bg-[#344e41]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${ContactBanner})`,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        }}
      >
        <h1 className="headline text-[30px] md:text-7xl md:mb-6 font-alonira">Contact me</h1>
        <h3 className="headline font-alonira text-[18px] md:text-[24px]">
          We love hearing from you
        </h3>
        <p className="headline max-w-3xl text-[20px] sm:*text-[24px] md:text-[30px] font-mostra">
          Whether it is to enquire about an event, discuss foraging or simply to ask for recipes!
        </p>
        <span className="font-alonira">Aneke</span>
      </section>
      {/*more, bookings, find us-driection*/}
      <section className="py-12 md:py-18 text-[#344e41]">
        <div className="container font-alonira">
          <h2 className="mb-6">Find us</h2>
          <a href="/contact" className="hover:text-[#a3b18a] flex gap-1 items-center group w-fit">
            <span className="leading-none text-[11px] md:text-[16px] tracking-[3%]">
              DIRECTIONS
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

        {/*seperator*/}
        <span className="block container py-12">
          <hr className="w-full h-px text-[#dedede]" />
        </span>

        <div className="container font-alonira">
          <h2 className="mb-6">Bookings</h2>
          <a
            href="/contact"
            className="hover:text-[#a3b18a] flex gap-1 items-center group mb-4 w-fit"
          >
            <span className="leading-none text-[11px] md:text-[16px] tracking-[3%]">
              EVENT BOOKINGS
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
          <a href="/contact" className="hover:text-[#a3b18a] flex gap-1 items-center group w-fit">
            <span className="leading-none text-[11px] md:text-[16px] tracking-[3%]">
              FORAGE POP-UP BOOKINGS
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

        {/*seperator*/}
        <span className="block container py-12">
          <hr className="w-full h-px text-[#dedede]" />
        </span>

        <div className="container font-mostra">
          <h2 className="mb-6 font-alonira">Enquiries</h2>
          <a
            href="#"
            className="hover:text-[#a3b18a] flex gap-1 items-center group mb-4 w-fit leading-none text-[18px] tracking-[3%]"
          >
            077721 56035
          </a>
          <a
            href="mailto:enquiries@foodbyaneke.com"
            className="hover:text-[#a3b18a] flex gap-1 items-center group w-fit leading-none text-[18px] tracking-[3%] underline"
          >
            enquiries@foodbyaneke.com
          </a>
          {/*enquiry form */}
          <div className="mt-10">
            <form className="flex-col flex gap-2 text-[18px]">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-[#a3b18a] w-full focus:outline-none focus:border-[#344e41] placeholder:text-[#344e41]"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b border-[#a3b18a] w-full focus:outline-none focus:border-[#344e41] placeholder:text-[#344e41]"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border-b border-[#a3b18a] w-full focus:outline-none focus:border-[#344e41] placeholder:text-[#344e41]"
              />
              {/* <input type="" placeholder="Email" className="border border-b w-full" /> */}
              <textarea
                name="enquiry"
                id="enq"
                placeholder="Your Enquiry"
                className="border-b border-[#a3b18a] w-full focus:outline-none focus:border-[#344e41] placeholder:text-[#344e41]"
              ></textarea>
              <label htmlFor="radio-policy" className="flex gap-4">
                <input id="radio-policy" type="radio" />
                <span>I agree to the Privacy Policy</span>
              </label>
              <button
                type="submit"
                className="flex items-center gap-2 group cursor-pointer w-fit px-3 font-alonira text-[12px]"
              >
                <span className="leading-none text-[11px] md:text-[16px] tracking-[3%]">Send</span>
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
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
