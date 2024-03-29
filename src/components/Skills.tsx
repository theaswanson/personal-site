import "./Skills.scss";
import skillsJson from "../data/skills.json";
import { Skill, SkillGroup } from "../models";

function Skills() {
  const skillsImagesPath = "/img/skills";
  const skillGroups = skillsJson as SkillGroup[];

  const getSkills = (category: string) => {
    return skillGroups.find((s) => s.category === category)?.skills ?? [];
  };

  const getImagePath = (skill: Skill) => {
    return `${skillsImagesPath}/${skill.imageName}.png`;
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
          {skillGroups.map((skillGroup) => (
            <div className="category" key={skillGroup.category}>
              <div className="title">{skillGroup.category}</div>
              <div className="skills">
                {getSkills(skillGroup.category!).map((skill) => (
                  <div className="skill" key={skill.name}>
                    {skill.imageName && (
                      <div className="image">
                        <img src={getImagePath(skill)} alt={skill.name} />
                      </div>
                    )}
                    <div className="name">{skill.name}</div>
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
