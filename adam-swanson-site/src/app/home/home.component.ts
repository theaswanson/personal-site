import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class NavigationItem {
  title: string;
  fragment: string;
}

class SocialItem {
  icon: IconDefinition;
  href: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faBars = faBars;

  mobileNavigationOpen = false;
  navigationItems: NavigationItem[] = [
    { title: 'Home', fragment: 'home' },
  ];
  socialItems: SocialItem[] = [
    { icon: faTwitter, href: 'https://twitter.com/crisp2020' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/adam-swanson/' },
    { icon: faGithub, href: 'https://github.com/theaswanson' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileNavigation() {
    this.mobileNavigationOpen = !this.mobileNavigationOpen;
  }

}
