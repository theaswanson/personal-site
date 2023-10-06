import { Milestone } from "../models";
import achievementsJson from "../data/achievements.json";

function Achievements() {
  const achievements = achievementsJson as Milestone[];

  return (
    <div className="card" id="achievements">
      <div className="card-content">
        <div className="info">
          <div className="header">
            <div className="title">Achievements</div>
          </div>
        </div>
        <div className="milestones">
          {achievements.map((e) => (
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

export default Achievements;
