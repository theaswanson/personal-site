import { Component, Input, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavigationItem } from 'src/app/models';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.scss']
})
export class MobileNavigationComponent implements OnInit {

  @Input() navigationItems: NavigationItem[];

  faBars = faBars;
  navigationOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavigation() {
    this.navigationOpen = !this.navigationOpen;
  }

  navigate(fragment: string) {
    this.navigationOpen = false;
    setTimeout(() => {
      const element = document.querySelector(`#${fragment}`);
      element.scrollIntoView({ behavior: 'smooth' });
    }, 1)
  }
}
