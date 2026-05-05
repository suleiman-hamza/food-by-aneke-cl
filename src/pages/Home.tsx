import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="p-5 py-7">
        <h2 className="font-alonira text-[20px]">
          An experience to <span>treasure</span>
        </h2>
        <p>
          We are all about food and how we experience it. We love introducing new flavours,
          ingredients and techniques to people. We are all about food as a sustainable, nutricious,
          enjoyable and sharing event.
        </p>
      </section>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolorum eveniet laborum,
        similique accusantium facilis, fugiat nobis vero rerum tempora iusto. Beatae deserunt
        doloribus rem distinctio deleniti numquam doloremque explicabo!
      </p>
    </>
  );
}
