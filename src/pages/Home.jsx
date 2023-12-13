import { Link } from "react-router-dom";
import Section from "../components/Sections/Section";
import { IoMenu } from "react-icons/io5";

const Home = () => {
  return (
    <div>
      {/* navigation bar */}
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center">
          <label
            htmlFor="my-drawer"
            className=" rounded-full mt-6 btn-sm drawer-button lg:hidden"
          >
            <IoMenu className="text-xl" />
          </label>
          <img
            className=" w-32 mb-3 ml-2 lg:w-60"
            src="https://goodshelf.app/assets/images/logo.png"
            alt=""
          />
        </div>
        <div className="mt-4">
          <ul className=" gap-6 hidden  lg:flex lg:items-center">
            <Link>Refer & Save </Link>
            <Link>Wallet </Link>
            <Link>Sign In </Link>
            <Link>About Us </Link>
            <Link>Contact Us </Link>
            <Link>Refunds / Cancellation</Link>
          </ul>
        </div>
      </div>

      <hr />

      {/* Product Sectons */}
      <div className="mt-10 space-y-6 ">
        <Section title={"Value Deals"}></Section>
        <Section title={"Kid Friendly"}></Section>
        <Section title={"Millet Alternatives"}></Section>
      </div>
    </div>
  );
};

export default Home;
