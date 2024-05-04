import projects from "./projects";
import "../../css/ProjectsList.css";

function ProjectsList() {
  return (
    <ul className="ProjectsList">
      {projects.map((project, index) => (
        <li key={index}>
          <h3 className="project-title is-size-4 has-text-info-light">
            {project.title}
          </h3>
          <p className="description is-size-5 has-text-grey-lighter">
            {project.description}
          </p>
          <p className="tech-stack is-size-5">
            <span className="">Technologies Used: </span>
            {project.techStack}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ProjectsList;
