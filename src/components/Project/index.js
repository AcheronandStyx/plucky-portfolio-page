import React from "react";

function Project({ app, projectName, repo, imgName }) {
  // console.log(project); // Confirmed full project is successfully passed with all data, but getting undefined when I reference data below.

  // const { app, name, repo, imgName } = { project };

  console.log(app);
  console.log(imgName, "imgName");
  console.log(projectName, "name");
  console.log(repo, "repo");

  return (
    <div>
      <div>
        <img
          src={require(`../../assets/images/${imgName}.PNG`)}
          alt={imgName + " web application"}
        />
        <a href={app} alt={projectName + " web application"}>{projectName}</a>
        <br></br>
        <a href={repo} alt={projectName + " web application"}>GitHub</a>
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
