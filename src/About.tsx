import React from "react";

function About() {
  const navigate = (fragment?: string) => {
    if (fragment) {
      setTimeout(() => {
        scrollToElement(fragment);
      }, 1);
    }
    return undefined;
  };

  const scrollToElement = (id: string) => {
    const element = document.querySelector(`#${id}`);
    element && element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="card" id="about">
      <div className="card-content">
        <div className="info">
          <div className="header">
            <div className="title">About</div>
          </div>
        </div>
        <div className="text">
          Hello! I'm a software developer who's looking to help others and make
          a difference.
          <br />
          <br />
          I'm a graduate of{" "}
          <a href="https://www.indianatech.edu/" target="_blank">
            Indiana Tech
          </a>{" "}
          with a B.S. degree in Software Engineering (summa cum laude) and a
          minor in Math. I currently work as a developer at{" "}
          <a href="https://www.olo.com/" target="_blank">
            Olo
          </a>{" "}
          where I'm constantly growing and working with a variety of{" "}
          <a onClick={() => navigate("skills")}>technologies</a>.
          <br />
          <br />
          In my spare time, I develop and maintain a{" "}
          <a href="https://illianaantiquepower.com" target="_blank">
            website
          </a>{" "}
          for a local non-profit organization, and I work on several of my own
          open-source projects which you can find on my{" "}
          <a href="https://github.com/theaswanson" target="_blank">
            GitHub
          </a>
          . I'm also sharing my knowledge with others and helping people learn
          from my experiences through my{" "}
          <a href="https://blog.layerseven.net" target="_blank">
            blog
          </a>
          !
          <br />
          <br />
          If you have any questions or would like to connect, please{" "}
          <a href="mailto:layersevenmail@gmail.com">email me</a> or message me
          on{" "}
          <a href="https://twitter.com/crisp2020" target="_blank">
            Twitter
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default About;
