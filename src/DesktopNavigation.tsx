import "./DesktopNavigation.scss";
import { ExternalNavigationItem, NavigationItem } from "./models";

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

  const scrollToElement = (id: string) => {
    const element = document.querySelector(`#${id}`);
    element && element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="desktop-navigation card">
      <div className="card-content">
        <ul className="internal-items">
          {navigationItems.map((i) => (
            <li key={i.title}>
              <a onClick={() => navigate(i.fragment)}>{i.title}</a>
            </li>
          ))}
        </ul>
        <ul className="external-items">
          {externalNavigationItems.map((i) => (
            <li key={i.title}>
              <a href={i.url} target="_blank">
                {i.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DesktopNavigation;
