import { Link } from "react-router";
import CustomButton from "../components/CutomButton";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://react.dev/images/docs/scientists/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Home() {
  return (
    <>
      <p className="text-2xl border">Welcome {user.name}</p>
      <CustomButton />
      <Link to="/about">About Page</Link>
    </>
  );
}
