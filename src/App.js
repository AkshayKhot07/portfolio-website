import { BrowserRouter, Switch, Route } from "react-router-dom";

//styles
import "./App.css";

//pages and components
import Home from "./pages/home/Home.js";
import Projects from "./pages/projects/Projects.js";
import Articles from "./pages/articles/Articles.js";
import Resume from "./pages/resume/Resume.js";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import Footer from "./components/Footer.js";
import UsersMessages from "./pages/messages/UsersMessages.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/articles">
              <Articles />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/usersmessages">
              <UsersMessages />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
