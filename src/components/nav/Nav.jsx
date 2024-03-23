import { Link } from "react-router-dom";
import "./Nav.css";
import Hamburger from "./hamburger/Hamburger";
export default function Header() {
  return (
    <div className="template-container">
      <div className="flex items-center justify-between">
        <Link to="/" className="logo">
          Logo
        </Link>

        <div className="drawer drawer-end w-auto">
          <input id="sidebar" type="checkbox" className="drawer-toggle" />
          <Hamburger />
        </div>
      </div>
    </div>
  );
}
