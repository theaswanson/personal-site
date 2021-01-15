import { Component, OnInit } from '@angular/core';
import { ExternalNavigationItem, NavigationItem } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navigationItems: NavigationItem[] = [
    new NavigationItem('Home'),
    new NavigationItem('About'),
    new NavigationItem('Experience'),
    new NavigationItem('Skills'),
    new NavigationItem('Achievements')
  ];

  externalNavigationItems: ExternalNavigationItem[] = [
    { title: 'Blog', url: 'https://blog.layerseven.net' }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
