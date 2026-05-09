export default function Contact() {
  return (
    <>
      <section className="bg-black flex flex-col gap-4 justify-center items-center container min-h-[75vh] text-white text-center">
        <h1 className="text-[30px] font-alonira">Contact me</h1>
        <h3 className="font-alonira text-[18px]">We love hearing from you</h3>
        <p className="text-[20px]">
          Whether it is to enquire about an event, discuss foraging or simply to ask for recipes!
        </p>
        <span className="">Aneke</span>
      </section>
      {/*more, bookings, find us-driection*/}
      <section className="py-12 md:py-18 text-[#344e41]">
        <div className="border container font-alonira">
          <h2 className="mb-6">Find us</h2>
          <a href="/contact" className="hover:text-[#a3b18a] flex gap-1 items-center group">
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
          <hr className="w-full h-px" />
        </span>

        <div className="border container font-alonira">
          <h2 className="mb-6">Bookings</h2>
          <a href="/contact" className="hover:text-[#a3b18a] flex gap-1 items-center group mb-4">
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
          <a href="/contact" className="hover:text-[#a3b18a] flex gap-1 items-center group">
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
          <hr className="w-full h-px" />
        </span>

        <div className="border container font-alonira">
          <h2 className="mb-6">Enquiries</h2>
          <a
            href="/contact"
            className="hover:text-[#a3b18a] flex gap-1 items-center group mb-4 w-fit"
          >
            <span className="leading-none text-[11px] md:text-[16px] tracking-[3%]">
              077721 56035
            </span>
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
      </section>
    </>
  );
}
