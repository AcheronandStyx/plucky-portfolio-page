import React from "react";

function Project(project) {
  console.log(project); // Confirmed full project is successfully passed with all data, but getting undefined when I reference project.imgName below.
  // console.log(imgName);
  return (
    <div>
      <div>
        <img
          src={require(`../../assets/images/${project.imgName}.PNG`)}
          alt={project.name + " web application"}
        />
        <a href={project.app} alt={project.name + " web application"}/>
        <a href={project.repo} alt={project.name + " web application"}/>
      </div>
    </div>
  );
}

export default Project;
