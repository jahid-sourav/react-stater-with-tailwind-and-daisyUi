import "./Header.css";
import Hamburger from "./hamburger/Hamburger";
export default function Header() {
  return (
    <header className="header">
      <div className="template-container">
        <div className="flex items-center justify-between">
          <a href="index.html" className="logo">
            Logo
          </a>

          <div className="drawer drawer-end w-auto">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <Hamburger />
          </div>
        </div>
      </div>
    </header>
  );
}
