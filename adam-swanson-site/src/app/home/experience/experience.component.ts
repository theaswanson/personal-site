import { Component, OnInit } from '@angular/core';

class Milestone {
  title: string;
  subtitle: string;
  date: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience: Milestone[] = [
    { title: 'Aptera Software, Inc.', subtitle: 'Software Developer', date: 'May 2020 - Present' },
    { title: 'Aptera Software, Inc.', subtitle: 'Software Development Intern', date: 'September 2019 - May 2020' },
    { title: 'Rea Magnet Wire', subtitle: 'Programming Systems Analyst Intern', date: 'Summer 2019' },
    { title: 'West Side Tractor Sales', subtitle: 'Software Development Intern', date: 'Summer & Winter 2018' },
    { title: 'Aubry Lane', subtitle: 'Software Development Intern', date: 'Summer 2017' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
