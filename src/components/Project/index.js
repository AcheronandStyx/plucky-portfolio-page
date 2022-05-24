import React from "react";
import { Card } from "react-bootstrap";

function Project({ app, projectName, repo, imgName, blurb }) {
  // console.log(project); // Confirmed full project is successfully passed with all data, but getting undefined when I reference data below.

  // const { app, name, repo, imgName } = { project };

  console.log(app);
  console.log(imgName, "imgName");
  console.log(projectName, "name");
  console.log(repo, "repo");

  return (
    <div class="card, col-sm, project">
      <div class="project-header">
      <h2 class="card-title">{projectName}</h2>
      <p class="project-blurb">{blurb}</p>
      </div>
      <img
        class="project-img"
        src={require(`../../assets/images/${imgName}.png`)}
        alt={imgName + " web application"}
      />
      <div class="card-body">
        <div class="project-links">
          <a
            class="btn btn-primary"
            href={app}
            alt={projectName + " web application"}
          >
            Deployment
          </a>
          <a
            class="btn btn-primary"
            href={repo}
            alt={projectName + " web application"}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

/*
        <img
          src={require(`../../assets/images/${project.imgName}.PNG`)}
          alt={project.name + " web application"}
        />

*/

export default Project;
