import { NavLink } from "react-router-dom";

//styles
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <span>AK</span>
        </li>
        <li className="nav-home">
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-projects">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="nav-articles">
          <NavLink to="/articles">Articles</NavLink>
        </li>
        <li className="nav-resume">
          <NavLink to="/resume">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
}
