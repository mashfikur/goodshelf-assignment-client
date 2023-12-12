import { Link } from "react-router-dom";
import ValueDeals from "../components/Sections/ValueDeals";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <img
            className="w-60"
            src="https://goodshelf.app/assets/images/logo.png"
            alt=""
          />
        </div>
        <div>
          {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label> */}
          <ul className="flex gap-6">
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

      <div className="mt-20">
        <ValueDeals></ValueDeals>
      </div>
    </div>
  );
};

export default Home;
