// import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.css";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();
  return (
    <section className="container border font-alonira py-12 md:py-18">
      <div className="embla">
        <div className={`${styles.embla__viewport} outline outline-blue-300 mb-4`} ref={emblaRef}>
          <div className={styles.embla__container}>
            <div className={`${styles.embla__slide} p-2 border w-full h-auto`}>
              <span>Wedding</span>
            </div>
            <div className={styles.embla__slide}>Pop-up Dining</div>
            <div className={styles.embla__slide}>Private Chef</div>
            <div className={styles.embla__slide}>Bespoke Evevnt</div>
            <div className={styles.embla__slide}>Corporate</div>
          </div>
        </div>

        <div className="border border-red-400 flex justify-between">
          <button className="embla__prev" onClick={goToPrev}>
            Back
          </button>
          <button className="embla__next" onClick={goToNext}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
