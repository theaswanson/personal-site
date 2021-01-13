import { Component, OnInit } from '@angular/core';
import { Milestone } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  achievements: Milestone[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.achievements = this.dataService.getAchievements();
  }

}
