//styles
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
      <div className="contact">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
          voluptate accusantium, eos nobis cumque laboriosam odio deleniti id
          sit eius? Itaque rem quod minus a sequi exercitationem consectetur at
          maiores.
        </p>
      </div>
    </div>
  );
}
