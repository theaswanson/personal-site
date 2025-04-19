import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialItem } from "../models";
import { HeaderCard } from "./Cards";
import "./Header.scss";
import { faTwitterX } from "./faTwitterX";

const Icon = ({ item }: { item: SocialItem }) => (
  <div className='icon' key={item.href}>
    <a href={item.href} target='_blank'>
      <FontAwesomeIcon icon={item.icon!} size={"lg"} />
    </a>
  </div>
);

const socialItems: SocialItem[] = [
  { icon: faLinkedin, href: "https://www.linkedin.com/in/adam-swanson/" },
  { icon: faGithub, href: "https://github.com/theaswanson" },
  { icon: faTwitterX, href: "https://x.com/crisp2020" },
  { icon: faPenSquare, href: "https://blog.adamswanson.dev" },
];

const Header = () => (
  <HeaderCard
    title='Adam Swanson'
    subtitle='Senior Software Engineer'
    img='/img/adam.jpg'
  >
    <div className='icons'>
      {socialItems.map((i) => (
        <Icon item={i} />
      ))}
    </div>
  </HeaderCard>
);

export default Header;
