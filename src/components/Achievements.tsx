import achievementsJson from "../data/achievements.json";
import { Milestone } from "../models";
import { TitleCard } from "./Cards";

const achievements = achievementsJson as Milestone[];

const Achievements = () => {
  return (
    <TitleCard id='achievements' title='Achievements'>
      <div className='milestones'>
        {achievements.map((e) => (
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

export default Achievements;
