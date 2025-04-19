import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ExternalNavigationItem, NavigationItem } from "../models";
import { navigate } from "../utils";
import "./MobileNavigation.scss";

type MobileNavigationProps = {
  navigationItems: NavigationItem[];
  externalNavigationItems: ExternalNavigationItem[];
};

export const MobileNavigation = ({
  navigationItems,
  externalNavigationItems,
}: MobileNavigationProps) => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  const toggleNavigation = () => {
    setNavigationOpen(!navigationOpen);
  };

  const handleNavigate = (item: NavigationItem) => {
    navigate(item.fragment);
    setNavigationOpen(false);
  };

  return (
    <>
      <div className='mobile-nav-spacer' />
      <div className='mobile-navigation'>
        <div className='icon' onClick={() => toggleNavigation()}>
          <FontAwesomeIcon icon={faBars} size={"lg"} />
        </div>
        {navigationOpen && (
          <>
            <ul className='internal-items'>
              {navigationItems.map((i) => (
                <li onClick={() => handleNavigate(i)} key={i.title}>
                  <a>{i.title}</a>
                </li>
              ))}
            </ul>
            <ul>
              {externalNavigationItems.map((i) => (
                <li key={i.title}>
                  <a href={i.url} target='_blank'>
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
};
