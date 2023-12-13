import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        >
          {" "}
        </label>
        <ul className="menu pr-16 pl-4 pt-8  min-h-full flex flex-col bg-white gap-6 text-base-content">
          {/* Sidebar content here */}
          <Link>Refer & Save </Link>
          <Link>Wallet </Link>
          <Link>Sign In </Link>
          <Link>About Us </Link>
          <Link>Contact Us </Link>
          <Link>Refunds / Cancellation</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  children: PropTypes.node,
};
