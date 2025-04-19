import { ExternalNavigationItem, NavigationItem } from "../models";
import { navigate } from "../utils";
import { Card } from "./Cards";
import "./DesktopNavigation.scss";

interface DesktopNavigationProps {
  navigationItems: NavigationItem[];
  externalNavigationItems: ExternalNavigationItem[];
}

const DesktopNavigation = ({
  navigationItems,
  externalNavigationItems,
}: DesktopNavigationProps) => (
  <Card className='desktop-navigation'>
    <>
      <ul className='internal-items'>
        {navigationItems.map((i) => (
          <li key={i.title}>
            <a onClick={() => navigate(i.fragment)}>{i.title}</a>
          </li>
        ))}
      </ul>
      <ul className='external-items'>
        {externalNavigationItems.map((i) => (
          <li key={i.title}>
            <a href={i.url} target='_blank'>
              {i.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  </Card>
);

export default DesktopNavigation;
