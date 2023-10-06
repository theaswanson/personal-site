import { useState } from "react";
import "./MobileNavigation.scss";
import { ExternalNavigationItem, NavigationItem } from "../models";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface MobileNavigationProps {
  navigationItems: NavigationItem[];
  externalNavigationItems: ExternalNavigationItem[];
}

function MobileNavigation({
  navigationItems,
  externalNavigationItems,
}: MobileNavigationProps) {
  const [navigationOpen, setNavigationOpen] = useState(false);

  const toggleNavigation = () => {
    setNavigationOpen(!navigationOpen);
  };

  const navigate = (fragment?: string) => {
    if (fragment) {
      setTimeout(() => {
        scrollToElement(fragment);
      }, 1);
      setNavigationOpen(false);
    }
    return undefined;
  };

  const scrollToElement = (id: string) => {
    const element = document.querySelector(`#${id}`);
    element && element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="mobile-nav-spacer"></div>
      <div className="mobile-navigation">
        <div className="icon" onClick={() => toggleNavigation()}>
          <FontAwesomeIcon icon={faBars} size={"lg"} />
        </div>
        {navigationOpen && (
          <>
            <ul className="internal-items">
              {navigationItems.map((i) => (
                <li onClick={() => navigate(i.fragment)} key={i.title}>
                  <a>{i.title}</a>
                </li>
              ))}
            </ul>
            <ul>
              {externalNavigationItems.map((i) => (
                <li key={i.title}>
                  <a href={i.url} target="_blank">
                    {i.title}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default MobileNavigation;
