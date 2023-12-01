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
    // test
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
        <div className='list-item'>
          <About />
        </div>
        <div className='list-item'>
          <Skills />
        </div>
        <div className='list-item'>
          <Experience />
        </div>
        <div className='list-item'>
          <Volunteering />
        </div>
        <div className='list-item'>
          <Achievements />
        </div>
      </div>
      <div className='column'></div>
    </div>
  );
}

export default App;
