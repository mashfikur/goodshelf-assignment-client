import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <Navbar>
        <Outlet></Outlet>
      </Navbar>
    </div>
  );
};

export default Layout;
