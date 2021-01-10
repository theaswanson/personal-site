import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { NavigationItem, SocialItem } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

}
