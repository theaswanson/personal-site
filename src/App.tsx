import "./App.scss";
import DesktopNavigation from "./components/DesktopNavigation";
import { NavigationItem } from "./models";
import MobileNavigation from "./components/MobileNavigation";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Volunteering from "./components/Volunteering";

function App() {
  const navigationItems = [
    new NavigationItem("Home"),
    new NavigationItem("About"),
    new NavigationItem("Skills"),
    new NavigationItem("Experience"),
    new NavigationItem("Volunteering"),
    new NavigationItem("Achievements"),
  ];

  const externalNavigationItems = [
    { title: "Blog", url: "https://blog.adamswanson.dev" },
  ];

  return (
    <div className="content" id="home">
      <div className="column">
        <DesktopNavigation
          navigationItems={navigationItems}
          externalNavigationItems={externalNavigationItems}
        />
      </div>
      <div className="main-column">
        <MobileNavigation
          navigationItems={navigationItems}
          externalNavigationItems={externalNavigationItems}
        />
        <Header />
        <div className="list-item">
          <About />
        </div>
        <div className="list-item">
          <Skills />
        </div>
        <div className="list-item">
          <Experience />
        </div>
        <div className="list-item">
          <Volunteering />
        </div>
        <div className="list-item">
          <Achievements />
        </div>
      </div>
      <div className="column"></div>
    </div>
  );
}

export default App;
