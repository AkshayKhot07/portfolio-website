import "./Projects.css";
import TodoListIcon from "../../assets/projectIcons/todoList.PNG";
import WeatherAppIcon from "../../assets/projectIcons/weatherApp.PNG";
import EtchaSketchIcon from "../../assets/projectIcons/etchaSketch.PNG";
import CalculatorIcon from "../../assets/projectIcons/calculator.PNG";
import EcommerceIcon from "../../assets/projectIcons/ecommerce.PNG";
import MovieApp from "../../assets/projectIcons/movieApp.PNG";

export default function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project">
          <h4>Shopping Cart</h4>
          <img src={EcommerceIcon} alt="shopping cart preview" />
          <div>
            <a
              href="https://github.com/AkshayKhot07/e-commerce-app"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
            <a
              href="https://e-commerce-app-b7b4c.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
          <p>
            A shopping cart (React and Firebase) application that makes you add
            products to the cart, track orders along with user authentication.
          </p>
        </div>

        <div className="project">
          <h4>Movie App</h4>
          <img src={MovieApp} alt="movie app preview" />
          <div>
            <a
              href="https://github.com/AkshayKhot07/movie-app"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
            <a
              href="https://movie-app-akshaykhot07.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
          <p>
            A shopping cart (React and Firebase) application that makes you add
            products to the cart, track orders along with user authentication.
          </p>
        </div>

        <div className="project">
          <h4>Todo List</h4>
          <img src={TodoListIcon} alt="todo list preview" />
          <div>
            <a
              href="https://github.com/AkshayKhot07/todo-list"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
            <a
              href="https://akshaykhot07.github.io/todo-list/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
          <p>
            A Todo app to maintain your daily and weekly tasks, along with a
            projects section to track, maintain todos of respective project.
          </p>
        </div>

        <div className="project">
          <h4>Weather App</h4>
          <img src={WeatherAppIcon} alt="weather app preview" />
          <div>
            <a
              href="https://github.com/AkshayKhot07/weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
            <a
              href="https://akshaykhot07.github.io/weather-app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
          <p>
            Weather App that shows daily and hourly weather forecast. Users can
            search by city name to know the weather of a specific city.
          </p>
        </div>

        <div className="project">
          <h4>Etch A Sketch</h4>
          <img src={EtchaSketchIcon} alt="etchasketch preview" />
          <div>
            <a
              href="https://github.com/AkshayKhot07/etch-a-sketch"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
            <a
              href="https://akshaykhot07.github.io/etch-a-sketch/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
          <p>
            A grid based sketch web app to draw and scribble your imagination.
            Toggle grid sizes, doddle sketches and repeat.
          </p>
        </div>

        <div className="project">
          <h4>Calculator</h4>
          <img src={CalculatorIcon} alt="calculator preview" />
          <div>
            <a
              href="https://github.com/AkshayKhot07/Calculator"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
            <a
              href="https://akshaykhot07.github.io/Calculator/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
          <p>A calculator web app to perform basic arithmetic operations.</p>
        </div>
      </div>
    </div>
  );
}
