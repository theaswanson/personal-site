import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { SocialItem } from 'src/app/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  socialItems: SocialItem[] = [
    { icon: faTwitter, href: 'https://twitter.com/crisp2020' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/adam-swanson/' },
    { icon: faGithub, href: 'https://github.com/theaswanson' },
    { icon: faPenSquare, href: 'https://blog.layerseven.net' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
