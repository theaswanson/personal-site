import volunteeringJson from "../data/volunteering.json";
import { VolunteerPosition } from "../models";
import { TitleCard } from "./Cards";

const Volunteering = () => {
  const achievements = volunteeringJson as VolunteerPosition[];

  return (
    <TitleCard id='volunteering' title='Volunteering'>
      <div className='milestones'>
        {achievements.map((e) => (
          <div className='milestone' key={e.title! + e.date}>
            <div className='image'>
              <img src={"/img/" + e.image} />
            </div>
            <div className='info'>
              <div className='title'>{e.title}</div>
              <div className='link'>
                <a href={e.url} target='_blank'>
                  {e.urlTitle}
                </a>
              </div>
              <div className='subtitle'>{e.subtitle}</div>
            </div>
            <div className='date'>{e.date}</div>
          </div>
        ))}
      </div>
    </TitleCard>
  );
};

export default Volunteering;
