import projects from "./projects";
import "../../css/ProjectsList.css";
import githubIcon from "../../assets/images/github_icon.png";

function ProjectsList() {
  return (
    <ul className="ProjectsList">
      {projects.map((project, index) => (
        <li key={index}>
          <div className="project-heading-area">
            <h3 className="project-title is-size-4 has-text-info-light">
              {project.title}
            </h3>

            {/* project link icon */}
            <a href={project.link} target="_blank">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>

            {/* If github link is not null, render a github link icon */}
            {project.githubLink !== null && (
              <a href={project.githubLink} target="_blank">
                <img src={githubIcon} alt="GitHub Repository" />
              </a>
            )}
          </div>

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
