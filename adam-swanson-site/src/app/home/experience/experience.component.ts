import { Component, OnInit } from '@angular/core';
import { Milestone } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience: Milestone[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.experience = this.dataService.getExperience();
  }

}
