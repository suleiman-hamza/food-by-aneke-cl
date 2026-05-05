import FooterLogo from "./FooterLogo";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#1f2421] py-12.5 font-mostra">
        <div className="container">
          <FooterLogo />
          {/* social logo */}
          <div className="flex justify-center items-center py-5">
            <a
              href="https://www.instagram.com/_suleiman_hue/"
              target="_blank"
              className="text-[#a3b18a] hover:text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01" />
                </g>
              </svg>
            </a>
          </div>
          {/*telphone*/}
          <span className="font-mostra flex justify-center mb-4 text-center text-white text-[24px]">
            <a href="tel:+2347085057435" className="text-[24px]">
              07085057435
            </a>
          </span>
          {/*copyright year*/}
          <span className="flex justify-center mb-4 text-center text-white text-[20px]">
            <p>
              Copyright © Food by Aneke Limited. All Rights Reserved. Website by{" "}
              <a
                href="https://shshunt.vercel.app/"
                className="text-[20px] text-[#a3b18a] hover:text-white transition-colors duration-300 underline"
              >
                Suleiman Hamza
              </a>
            </p>
          </span>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://shshunt.vercel.app/"
              className="text-[18px] text-[#a3b18a] hover:text-white transition-colors duration-300 underline"
            >
              Privacy Policy
            </a>
            <a
              href="https://shshunt.vercel.app/"
              className="text-[18px] text-[#a3b18a] hover:text-white transition-colors duration-300 underline"
            >
              Term of use
            </a>
            <a
              href="https://shshunt.vercel.app/"
              className="text-[18px] text-[#a3b18a] hover:text-white transition-colors duration-300 underline"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
