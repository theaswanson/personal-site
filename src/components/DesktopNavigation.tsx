import { ExternalNavigationItem, NavigationItem } from "../models";
import { scrollToElement } from "../utils";
import { Card } from "./Cards";
import "./DesktopNavigation.scss";

interface DesktopNavigationProps {
  navigationItems: NavigationItem[];
  externalNavigationItems: ExternalNavigationItem[];
}

function DesktopNavigation({
  navigationItems,
  externalNavigationItems,
}: DesktopNavigationProps) {
  const navigate = (fragment?: string) => {
    if (fragment) {
      setTimeout(() => {
        scrollToElement(fragment);
      }, 1);
    }
    return undefined;
  };

  return (
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
}

export default DesktopNavigation;
