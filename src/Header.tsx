import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { SocialItem } from "./models";

function Header() {
  const socialItems: SocialItem[] = [
    { icon: faTwitter, href: "https://twitter.com/crisp2020" },
    { icon: faLinkedin, href: "https://www.linkedin.com/in/adam-swanson/" },
    { icon: faGithub, href: "https://github.com/theaswanson" },
    { icon: faPenSquare, href: "https://blog.adamswanson.dev" },
  ];

  return (
    <div className="header-card">
      <div className="card-content">
        <div className="info">
          <div className="header">
            <div className="title">Adam Swanson</div>
            <div className="subtitle">Software Developer</div>
          </div>
          <div className="icons">
            {socialItems.map((i) => (
              <div className="icon" key={i.href}>
                <a href={i.href} target="_blank">
                  <FontAwesomeIcon icon={i.icon!} size={"lg"} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="image">
          <img src={process.env.PUBLIC_URL + "/img/adam.jpg"} />
        </div>
      </div>
    </div>
  );
}

export default Header;
