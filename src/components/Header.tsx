import { NavLink } from "react-router";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header-button">
        Home
      </NavLink>
      <NavLink to="/about" className="header-button">
        About
      </NavLink>
      <NavLink to="/contact" className="header-button">
        Contact
      </NavLink>
    </header>
  );
}
