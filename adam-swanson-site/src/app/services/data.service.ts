import { Injectable } from '@angular/core';
import { CategoricalSkills, Milestone } from '../models';
import skillsData from './data/skills.json';
import achievementsData from './data/achievements.json';
import experienceData from './data/experience.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getSkills(): CategoricalSkills[] {
    return skillsData as CategoricalSkills[];
  }

  getAchievements(): Milestone[] {
    return achievementsData as Milestone[];
  }

  getExperience(): Milestone[] {
    return experienceData as Milestone[];
  }
}
