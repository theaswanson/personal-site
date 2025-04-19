import "./App.scss";
import About from "./components/About";
import Achievements from "./components/Achievements";
import DesktopNavigation from "./components/DesktopNavigation";
import Experience from "./components/Experience";
import Header from "./components/Header";
import MobileNavigation from "./components/MobileNavigation";
import Skills from "./components/Skills";
import Volunteering from "./components/Volunteering";
import { NavigationItem } from "./models";

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

const App = () => (
  <div className='content' id='home'>
    <div className='column'>
      <DesktopNavigation
        navigationItems={navigationItems}
        externalNavigationItems={externalNavigationItems}
      />
    </div>
    <div className='main-column'>
      <MobileNavigation
        navigationItems={navigationItems}
        externalNavigationItems={externalNavigationItems}
      />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Volunteering />
      <Achievements />
    </div>
    <div className='column'></div>
  </div>
);

export default App;
