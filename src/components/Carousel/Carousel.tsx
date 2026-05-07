// import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.css";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();
  return (
    <section className="border">
      <div className="embla">
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            <div className={styles.embla__slide}>Wedding</div>
            <div className={styles.embla__slide}>Pop-up Dining</div>
            <div className={styles.embla__slide}>Private Chef</div>
            <div className={styles.embla__slide}>Bespoke Evevnt</div>
            <div className={styles.embla__slide}>Corporate</div>
          </div>
        </div>

        <button className="embla__prev" onClick={goToPrev}>
          Back
        </button>
        <button className="embla__next" onClick={goToNext}>
          Next
        </button>
      </div>
    </section>
  );
}
