import { navigate } from "../utils";
import { TitleCard } from "./Cards";

export const About = () => (
  <TitleCard id='about' title='About'>
    <div className='text'>
      Hello there! I'm a software developer who loves to learn and help others
      grow. I'm always looking to make a positive impact, both at work and in my
      community.
      <br />
      <br />I currently work as a full-stack developer at{" "}
      <a href='https://www.olo.com/' target='_blank'>
        Olo
      </a>{" "}
      where I'm working with software-at-scale through a variety of{" "}
      <a onClick={() => navigate("skills")}>technologies</a>. I'm a graduate of{" "}
      <a href='https://www.indianatech.edu/' target='_blank'>
        Indiana Tech
      </a>{" "}
      with a B.S. degree in Software Engineering (summa cum laude) and a minor
      in Math.
      <br />
      <br />
      In my spare time, I develop and maintain a{" "}
      <a href='https://illianaantiquepower.com' target='_blank'>
        website
      </a>{" "}
      for a local non-profit organization, and I work on several of my own
      open-source projects which you can find on my{" "}
      <a href='https://github.com/theaswanson' target='_blank'>
        GitHub
      </a>
      . I'm also sharing my knowledge with others and helping people learn from
      my experiences through my{" "}
      <a href='https://blog.adamswanson.dev' target='_blank'>
        blog
      </a>
      !
      <br />
      <br />
      If you have any questions or would like to connect, please{" "}
      <a href='mailto:layersevenmail@gmail.com'>email me</a> or message me on{" "}
      <a href='https://www.linkedin.com/in/adam-swanson/' target='_blank'>
        LinkedIn
      </a>
      .
    </div>
  </TitleCard>
);
