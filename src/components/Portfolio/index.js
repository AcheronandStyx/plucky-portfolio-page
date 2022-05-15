import React from "react";
import Project from "../Project";

function Portfolio() {
  // array of project infor to iterate through
  const projects = [
    {
      app: "https://acheronandstyx.github.io/find-a-flick/",
      name: "Find-a-Flick",
      repo: "https://github.com/AcheronandStyx/find-a-flick",
      id: null,
    },
    {
      app: "https://young-atoll-21457.herokuapp.com/",
      name: "fullStack jack",
      repo: "https://github.com/AcheronandStyx/full_stack_jack",
      id: null,
    },
  ];

  return (
    <div>
      <h2>Portfolio Projects</h2>
      <div>
        {projects.map((project) => {
          return <Project project={project}></Project>;
        })}
      </div>
    </div>
  );
}

export default Portfolio;
