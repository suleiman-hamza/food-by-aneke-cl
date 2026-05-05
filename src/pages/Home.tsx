import { Link } from "react-router";
import CustomButton from "../components/CutomButton";
import Hero from "../components/Hero";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://react.dev/images/docs/scientists/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Home() {
  return (
    <>
      <Hero />
      <p className="text-2xl border">Welcome {user.name}</p>
      <CustomButton />
      <Link to="/about">About Page</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, suscipit totam! At quos
        quidem voluptas fugiat inventore! Laborum iste sapiente distinctio at quibusdam possimus
        quae, tempora in nemo laudantium sed molestiae culpa pariatur consequatur? At quibusdam
        incidunt distinctio numquam odio deserunt, nemo facilis cupiditate ratione quod
        necessitatibus, sint natus explicabo repellendus repudiandae, aliquid unde omnis tempora
        illo mollitia est! Amet libero numquam odio cumque illo modi quo? Architecto fugiat
        veritatis sunt recusandae, nemo libero, necessitatibus veniam sequi eligendi aspernatur
        ipsam doloribus modi. Corrupti aliquid maiores placeat, corporis veritatis amet ducimus,
        expedita possimus maxime velit suscipit dicta quo architecto voluptates quasi!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolorum eveniet laborum,
        similique accusantium facilis, fugiat nobis vero rerum tempora iusto. Beatae deserunt
        doloribus rem distinctio deleniti numquam doloremque explicabo!
      </p>
    </>
  );
}
