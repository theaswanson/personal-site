import { Injectable } from '@angular/core';
import { CategoricalSkills } from '../models';
import skillsData from './data/skills.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getSkills(): CategoricalSkills[] {
    let skills = skillsData as CategoricalSkills[];
    return skills;
  }
}
