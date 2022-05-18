import React from "react";
import Project from "../Project";

function Portfolio() {
  // array of project info to iterate through
  const projects = [
    {
      app: "https://acheronandstyx.github.io/find-a-flick/",
      name: "Find-a-Flick",
      repo: "https://github.com/AcheronandStyx/find-a-flick",
      imgName: "findAFlick",
      id: 1,
    },
    {
      app: "https://young-atoll-21457.herokuapp.com/",
      name: "fullStack jack",
      repo: "https://github.com/AcheronandStyx/full_stack_jack",
      imgName: "FullStackJack",
      id: 2,
    },
  ];

  return (
    <div>
      <h2>Portfolio Projects</h2>
      <div>
        {projects.map((project) => {
          return <Project project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;
