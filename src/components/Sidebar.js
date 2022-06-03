import { NavLink } from "react-router-dom";

//styles
import "./Sidebar.css";
import LinkedinIcon from "../assets/linkedin.png";
import GithubIcon from "../assets/github2.png";
import TwitterIcon from "../assets/twitter.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/akshay-khot-088b41118/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="linkedin account" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AkshayKhot07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="github account" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/akshayKhot07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TwitterIcon} alt="twitter account" />
          </a>
        </li>
      </ul>
    </div>
  );
}
