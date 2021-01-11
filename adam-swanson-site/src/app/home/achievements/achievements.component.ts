import { Component, OnInit } from '@angular/core';
import { Milestone } from 'src/app/models';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  achievements: Milestone[] = [
    { title: 'Outstanding Graduate - Overall School of Computer Sciences', subtitle: 'Indiana Tech - Fort Wayne, Indiana', date: 'November 2020' },
    { title: 'B.S. in Software Engineering', subtitle: 'Indiana Tech - Fort Wayne, Indiana', date: 'May 2020' },
    { title: 'Completion of GFW Fellows Program', subtitle: 'Greater Fort Wayne Inc.', date: 'November 2019' },
    { title: 'Eagle Scout', subtitle: 'Troop 325 - Lafayette, Indiana', date: 'December 2014' },
    { title: 'Distinguished Citizen Award', subtitle: 'City of Lafayette, Indiana', date: 'December 2014' },
    { title: 'Recognition of Eagle Scout Rank', subtitle: 'Indiana General Assembly', date: 'December 2014' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
