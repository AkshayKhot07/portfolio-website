import { Link } from "react-router-dom";

//styles
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <span>Akshay Khot</span>
        </li>
        <li className="nav-home">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-projects">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-articles">
          <Link to="/articles">Articles</Link>
        </li>
        <li className="nav-resume">
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}
