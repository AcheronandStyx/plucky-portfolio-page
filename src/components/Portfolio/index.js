import { Grid } from "@mui/material";
import React from "react";
import Project from "../Project";

function Portfolio() {
  // array of project info to iterate through
  const projects = [
    {
      app: "https://acheronandstyx.github.io/find-a-flick/",
      projectName: "Find-a-Flick",
      repo: "https://github.com/AcheronandStyx/find-a-flick",
      imgName: "findAFlick",
      id: 1,
    },
    {
      app: "https://young-atoll-21457.herokuapp.com/",
      projectName: "fullStack jack",
      repo: "https://github.com/AcheronandStyx/full_stack_jack",
      imgName: "FullStackJack",
      id: 2,
    },
  ];

  // project={project}
  return (
    <div>
      <h2>Portfolio</h2>
      <div>
        <Grid container spacing={8}>
          {projects.map((project) => {
            return (
              <Project
                app={project.app}
                projectName={project.projectName}
                repo={project.repo}
                imgName={project.imgName}
                key={project.id}
              />
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Portfolio;
