import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navigationItems: NavigationItem[] = [
    { title: 'Home', fragment: 'home' },
    { title: 'About', fragment: 'about' },
    { title: 'Experience', fragment: 'experience' },
    { title: 'Skills', fragment: 'skills' },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
