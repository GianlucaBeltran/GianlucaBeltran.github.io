import { NavLink } from "react-router";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-name">Gianluca</h1>
      <div className="header-tab-container">
        <NavLink to="/" className="header-button">
          HOME
        </NavLink>
        <NavLink to="/" className="header-button">
          ABOUT ME
        </NavLink>
        <NavLink to="/about" className="header-button">
          WORKS
        </NavLink>
        <NavLink to="/contact" className="header-button">
          CONTACT
        </NavLink>
      </div>
      <div style={{ minWidth: "150px" }}></div>
    </header>
  );
}
