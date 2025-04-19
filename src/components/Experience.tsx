import experienceJson from "../data/experience.json";
import { Milestone } from "../models";
import { TitleCard } from "./Cards";

const experience = experienceJson as Milestone[];

export const Experience = () => {
  return (
    <TitleCard id='experience' title='Experience'>
      <div className='milestones'>
        {experience.map((e) => (
          <div className='milestone' key={e.title! + e.date}>
            <div className='image'>
              <img src={"/img/" + e.image} />
            </div>
            <div className='info'>
              <div className='title'>{e.title}</div>
              <div className='subtitle'>{e.subtitle}</div>
            </div>
            <div className='date'>{e.date}</div>
          </div>
        ))}
      </div>
    </TitleCard>
  );
};
