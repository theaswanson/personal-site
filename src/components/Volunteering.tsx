import { VolunteerPosition } from "../models";
import volunteeringJson from "../data/volunteering.json";

const Volunteering = () => {
  const achievements = volunteeringJson as VolunteerPosition[];

  return (
    <div className="card" id="volunteering">
      <div className="card-content">
        <div className="info">
          <div className="header">
            <div className="title">Volunteering</div>
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
                <div className="link">
                  <a href={e.url} target="_blank">
                    {e.urlTitle}
                  </a>
                </div>
                <div className="subtitle">{e.subtitle}</div>
              </div>
              <div className="date">{e.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
