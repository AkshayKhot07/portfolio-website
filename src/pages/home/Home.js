import { useState } from "react";

//styles and icons
import "./Home.css";
import ProfilePic from "../../assets/profilepic.jfif";
import JavascriptIcon from "../../assets/techntools/javascript.svg";
import ReactIcon from "../../assets/techntools/react.svg";
import HtmlIcon from "../../assets/techntools/html.svg";
import CssIcon from "../../assets/techntools/css.svg";
import FirebaseIcon from "../../assets/techntools/firebase.svg";
import JestIcon from "../../assets/techntools/jest.svg";
import GitIcon from "../../assets/techntools/git.svg";
import WebpackIcon from "../../assets/techntools/webpack.svg";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, message);
  };

  return (
    <div className="home">
      <div className="home-intro">
        <div className="home-intro-summary">
          <h3>
            Hello, <span>I'm Akshay Khot.</span>
          </h3>
          <p>
            An aspiring software engineer, currently learning web development
            using javascript and related technologies.
          </p>
        </div>
        <div className="home-intro-displaypic">
          <img src={ProfilePic} alt="profile picture" />
        </div>
      </div>

      <div className="home-tech-tools">
        <h3>TECHNOLOGIES AND TOOLS</h3>
        <div className="home-tech-tools-list">
          <div className="javascript-icon">
            <img src={JavascriptIcon} alt="javascript icon" />
            <p>Javascript</p>
          </div>
          <div className="react-icon">
            <img src={ReactIcon} alt="react icon" />
            <p>React</p>
          </div>
          <div className="html-icon">
            <img src={HtmlIcon} alt="html icon" />
            <p>HTML</p>
          </div>
          <div className="css-icon">
            <img src={CssIcon} alt="css icon" />
            <p>CSS</p>
          </div>

          <div className="firebase-icon">
            <img src={FirebaseIcon} alt="firebase icon" />
            <p>Firebase</p>
          </div>
          <div className="jest-icon">
            <img src={JestIcon} alt="jest icon" />
            <p>Jest</p>
          </div>
          <div className="git-icon">
            <img src={GitIcon} alt="git icon" />
            <p>Git</p>
          </div>
          <div className="webpack-icon">
            <img src={WebpackIcon} alt="webpack icon" />
            <p>Webpack</p>
          </div>
        </div>
      </div>

      <div className="home-contact">
        <form onSubmit={handleSubmit}>
          <h3>Drop a message</h3>
          <label>
            <input
              type="text"
              required
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label>
            <input
              type="email"
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <textarea
              rows="6"
              required
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
