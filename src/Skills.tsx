import React from "react";
import "./Skills.scss";
import skillsJson from "./data/skills.json";
import { Skill, CategoricalSkills } from "./models";

function Skills() {
  const skillsImagesPath = process.env.PUBLIC_URL + "/img/skills";
  const skills = skillsJson as CategoricalSkills[];
  const categories = skills
    .map((s) => s.category)
    .filter((value, i, ar) => ar.indexOf(value) === i);

  const getSkills = (category: string) => {
    return skills.find((s) => s.category === category)?.skills ?? [];
  };

  const getImagePath = (skill: Skill, category: string) => {
    return `${skillsImagesPath}/${category.toLowerCase()}/${
      skill.imageName
    }.png`;
  };

  return (
    <div className="card" id="skills">
      <div className="card-content">
        <div className="info">
          <div className="header">
            <div className="title">Skills</div>
          </div>
        </div>
        <div className="skills-list">
          {categories.map((c) => (
            <div className="category" key={c}>
              <div className="title">{c}</div>
              <div className="skills">
                {getSkills(c!).map((s) => (
                  <div className="skill" key={s.name}>
                    {s.imageName && (
                      <div className="image">
                        <img src={getImagePath(s, c!)} />
                      </div>
                    )}
                    <div className="name">{s.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
