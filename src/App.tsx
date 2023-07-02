import React from "react";
import "./App.scss";
import DesktopNavigation from "./DesktopNavigation";
import { NavigationItem } from "./models";
import MobileNavigation from "./MobileNavigation";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievements from "./Achievements";

function App() {
  const navigationItems = [
    new NavigationItem("Home"),
    new NavigationItem("About"),
    new NavigationItem("Skills"),
    new NavigationItem("Experience"),
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
          <Achievements />
        </div>
        {/*
        <app-experience className="list-item"></app-experience>
        <app-achievements className="list-item"></app-achievements> */}
      </div>
      <div className="column"></div>
    </div>
  );
}

export default App;
