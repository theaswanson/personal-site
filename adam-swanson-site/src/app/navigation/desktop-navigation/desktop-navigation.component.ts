import { Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from 'src/app/models';

@Component({
  selector: 'app-desktop-navigation',
  templateUrl: './desktop-navigation.component.html',
  styleUrls: ['./desktop-navigation.component.scss']
})
export class DesktopNavigationComponent implements OnInit {

  @Input() navigationItems: NavigationItem[];
  
  constructor() { }

  ngOnInit(): void {
  }

}