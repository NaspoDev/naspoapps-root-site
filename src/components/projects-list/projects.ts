// Module where projects are defined, to be used by the ProjectsList component.

interface project {
  title: string;
  description: string;
  techStack: string;
  link: string;
  githubLink: string | null;
}

const projects: project[] = [
  // To-Do Webapp
  {
    title: "To-Do WebApp",
    description:
      "A full stack to-do webapp where users can add new tasks (with optional due dates), mark tasks as completed, \
      and delete tasks. It uses local storage to restore the data when the user returns to the site.",
    techStack: "React, Express.js, MySQL, Docker, NGINX.",
    link: "https://todo.naspoapps.com/",
    githubLink: "https://github.com/NaspoDev/To-Do-WebApp",
  },

  // URL Shortener
  {
    title: "URL Shortener",
    description:
      "Shorten any url easily. The app works by returning a base-62 conversion of the entry's MySQL auto_increment database id, \
        and setting that as the new shortened url path. Making is short and unique every time.",
    techStack: "React, Spring Boot, MySQL, Docker, NGINX.",
    link: "https://lnk.naspoapps.com/",
    githubLink: "https://github.com/NaspoDev/url-shortener",
  },

  // Password Generator
  {
    title: "Password Generator",
    description: "",
    techStack: "",
    link: "",
    githubLink: "",
  },

  // Tether
  {
    title: "Tether",
    description: "",
    techStack: "",
    link: "",
    githubLink: "",
  },

  // Pack Manager Pro
  {
    title: "Pack Manager Pro",
    description: "",
    techStack: "",
    link: "",
    githubLink: "",
  },

  // Showcase
  {
    title: "Showcase",
    description: "",
    techStack: "",
    link: "",
    githubLink: "",
  },
];

export default projects;
