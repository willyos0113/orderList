import { type FC } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Blog List
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
