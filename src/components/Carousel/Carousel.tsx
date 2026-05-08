import { useState, useEffect } from "react";
import type { EmblaCarouselType } from "embla-carousel"; // install this to fix erroe
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.css";

// import images
import SquareWedding from "../../assets/images/square-weddings.jpg";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedSnap, setSelectedSnap] = useState(0);

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  const toggleButtonsDisabled = (emblaApi: EmblaCarouselType) => {
    setPrevButtonDisabled(!emblaApi.canScrollPrev()); // eroor connected here
    setNextButtonDisabled(!emblaApi.canScrollNext());
  };

  const scrollTo = (index) => emblaApi?.scrollTo(index);
  const setupSnaps = (emblaApi) => setScrollSnaps(emblaApi.scrollSnapList());
  const setActiveSnap = (emblaApi) => setSelectedSnap(emblaApi.selectedScrollSnap());

  useEffect(() => {
    if (!emblaApi) return;

    setupSnaps(emblaApi);
    setActiveSnap(emblaApi);

    toggleButtonsDisabled(emblaApi);
    emblaApi.on("reInit", toggleButtonsDisabled);
    emblaApi.on("select", toggleButtonsDisabled);
    emblaApi.on("reInit", setupSnaps);
    emblaApi.on("reInit", setActiveSnap);
    emblaApi.on("select", setActiveSnap);
  }, [emblaApi]);

  return (
    <section className="container border font-alonira py-12 md:py-18">
      <div className="embla">
        <div className={`${styles.embla__viewport} outline outline-blue-300 mb-4`} ref={emblaRef}>
          <div className={`${styles.embla__container} aspect-square`}>
            <div className={`${styles.embla__slide} w-full h-full relative`}>
              <img
                src={SquareWedding}
                alt="square-wedding-image"
                className="size-full object-cover"
                // style={ clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%); }
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#dad7cd] text-center text-4xl">
                Wedding
              </span>
            </div>
            <div className={`${styles.embla__slide} w-full h-full relative`}>
              <img
                src={SquareWedding}
                alt="square-wedding-image"
                className="size-full object-cover"
                // style={ clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%); }
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#dad7cd] text-center text-4xl">
                Pop-up Dining
              </span>
            </div>
            <div className={`${styles.embla__slide} w-full h-full relative`}>
              <img
                src={SquareWedding}
                alt="square-wedding-image"
                className="size-full object-cover"
                // style={ clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%); }
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#dad7cd] text-center text-4xl">
                Private Chef
              </span>
            </div>
            <div className={`${styles.embla__slide} w-full h-full relative`}>
              <img
                src={SquareWedding}
                alt="square-wedding-image"
                className="size-full object-cover"
                // style={ clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%); }
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#dad7cd] text-center text-4xl">
                Bespoke Evevnt
              </span>
            </div>
            <div className={`${styles.embla__slide} w-full h-full relative`}>
              <img
                src={SquareWedding}
                alt="square-wedding-image"
                className="size-full object-cover"
                // style={ clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%); }
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#dad7cd] text-center text-4xl">
                Corporate
              </span>
            </div>
          </div>
        </div>

        <div className="border border-red-400 flex justify-between">
          <button
            className={`${styles.embla__prev} text-[12px] md:text-[18px] text-[#344e41] hover:text-[#a3b18a] group flex gap-2 items-center`}
            onClick={goToPrev}
            disabled={prevButtonDisabled}
          >
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
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
            <span>Back</span>
          </button>
          {/*embla dot buttons*/}
          <div className={`${styles.embla__dots} hidden md:inline-block`}>
            {scrollSnaps.map((_, index) => (
              <button
                className={styles.embla__dot.concat(
                  index === selectedSnap ? "styles.embla__dot--selected" : "",
                )}
                key={index}
                onClick={() => scrollTo(index)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    fill="none"
                    stroke="#2271d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            ))}
          </div>

          <button
            className={`${styles.embla__next} text-[12px] md:text-[18px] text-[#344e41] hover:text-[#a3b18a] group flex gap-2 items-center`}
            onClick={goToNext}
            disabled={nextButtonDisabled}
          >
            <span>Next</span>
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
        </div>
      </div>
    </section>
  );
}
