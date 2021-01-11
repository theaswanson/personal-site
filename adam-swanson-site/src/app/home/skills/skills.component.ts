import { Component, OnInit } from '@angular/core';

class Skill {
  category: string;
  name: string;
  private _imageName?: string;
  get imageName(): string {
    if (this._imageName === undefined || this._imageName === null) {
      return this.name.toLowerCase();
    } else {
      return this._imageName;
    }
  }
  set imageName(name: string) {
    this._imageName = name;
  }

  constructor(category: string, name: string, imageName?: string) {
    this.category = category;
    this.name = name;
    this.imageName = imageName;
  }
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsImagesPath = '/assets/img/skills';

  skills: Skill[] = [
    new Skill('Languages', 'C#', 'csharp'),
    new Skill('Languages', 'C++', 'cplusplus'),
    new Skill('Languages', 'Java'),
    new Skill('Languages', 'JavaScript'),
    new Skill('Languages', 'Swift'),
    new Skill('Languages', 'TypeScript'),
    new Skill('Frameworks', 'Angular'),
    new Skill('Frameworks', 'Bootstrap'),
    new Skill('Frameworks', '.NET 5, .NET Core 3.1', 'dotnet'),
    new Skill('Frameworks', 'Material Design', 'material'),
    new Skill('Frameworks', 'React'),
    new Skill('Technologies', 'Docker'),
    new Skill('Technologies', 'EventStore'),
    new Skill('Technologies', 'Helm'),
    new Skill('Technologies', 'Kubernetes'),
    new Skill('Technologies', 'Progress OpenEdge', 'openedge'),
    new Skill('Technologies', 'RabbitMQ'),
    new Skill('Technologies', 'Terraform'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getCategories(): string[] {
    return this.skills.map(skill => skill.category).filter((skill, i, ar) => ar.indexOf(skill) === i);
  }

  getSkills(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  getImage(skill: Skill): string {
    return `${this.skillsImagesPath}/${skill.category.toLowerCase()}/${skill.imageName}.png`;
  }

}
