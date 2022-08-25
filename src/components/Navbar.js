import { NavLink } from "react-router-dom";
import Resume from "../assets/Akshay_Khot_Resume.pdf";

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
          <NavLink to={Resume} target="_blank" className="resume-navlink">
            <span>Resume</span>
            <i className="ri-external-link-line"></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
