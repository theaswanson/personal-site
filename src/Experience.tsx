import { Milestone } from "./models";
import experienceJson from "./data/experience.json";

function Experience() {
  const experience = experienceJson as Milestone[];

  return (
    <div className="card" id="experience">
      <div className="card-content">
        <div className="info">
          <div className="header">
            <div className="title">Experience</div>
          </div>
        </div>
        <div className="milestones">
          {experience.map((e) => (
            <div className="milestone" key={e.title! + e.date}>
              <div className="image">
                <img src={"/img/" + e.image} />
              </div>
              <div className="info">
                <div className="title">{e.title}</div>
                <div className="subtitle">{e.subtitle}</div>
              </div>
              <div className="date">{e.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
