import { Component, OnInit } from '@angular/core';
import { Skill, CategoricalSkills } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsImagesPath = '/assets/img/skills';
  skills: CategoricalSkills[];
  categories: string[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.skills = this.dataService.getSkills();
    this.categories = this.getCategories();
  }

  getSkills(category: string): Skill[] {
    return this.skills.find(skill => skill.category === category)?.skills ?? [];
  }
  
  getImagePath(skill: Skill, category: string): string {
    const imageName = skill.shortName ?? skill.name.toLowerCase();
    return `${this.skillsImagesPath}/${category.toLowerCase()}/${imageName}.png`;
  }

  private getCategories(): string[] {
    return this.getUniqueValues(this.skills.map(skill => skill.category));
  }

  private getUniqueValues(values: any[]) {
    return values.filter((value, i, ar) => ar.indexOf(value) === i);
  }

}
