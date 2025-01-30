import { NavLink } from "react-router";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-name">Gianluca</h1>
      <div className="header-tab-container">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "header-button")}
        >
          ABOUT ME
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive }) => (isActive ? "active" : "header-button")}
        >
          WORKS
        </NavLink>
      </div>
      <div className="header-name"></div>
    </header>
  );
}
