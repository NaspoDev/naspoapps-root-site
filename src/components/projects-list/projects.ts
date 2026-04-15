// Module where projects are defined, to be used by the ProjectsList component.

interface project {
  title: string;
  description: string;
  techStack: string;
  link: string | null;
  githubLink: string | null;
}

const projects: project[] = [
  // Tether
  {
    title: "Tether",
    description:
      "My most successful Minecraft plugin. Tether allows players to attach a lead to any mob, and other players.",
    techStack: "Java, Maven, SpigotMC API.",
    link: "https://www.spigotmc.org/resources/tether.100941/",
    githubLink: "https://github.com/NaspoDev/Tether",
  },

  // QuizMe (Flashcard WebApp)
  {
    title: "QuizMe (Flashcard WebApp)",
    description:
      "Create flashcards and place them in topics to organize them. Quiz yourself on your topics, quizzes can be timed or not. \
      It's a full-stack flashcard webapp with Google OAuth2 authentication.",
    techStack: "React, Express.js, MySQL, Docker, NGINX.",
    link: "https://quizme.naspoapps.com/",
    githubLink: "https://github.com/NaspoDev/QuizMe",
  },

  // BidSure Backend
  {
    title: "BidSure Backend",
    description:
      "The microservice backend for the BidSure auction web-application.",
    techStack: "Spring Boot, Spring Data JPA, Docker.",
    link: null,
    githubLink: "https://github.com/NaspoDev/bidsure-backend",
  },

  // URL Shortener
  {
    title: "URL Shortener",
    description:
      "Shorten any url easily. The app works by returning a base-62 conversion of the entry's MySQL auto_increment database id, \
        and setting that as the new shortened url path. Making it short and unique every time.",
    techStack: "React, Spring Boot, MySQL, Docker, NGINX.",
    link: "https://lnk.naspoapps.com/",
    githubLink: "https://github.com/NaspoDev/url-shortener",
  },

  // Pack Manager Pro
  {
    title: "Pack Manager Pro",
    description:
      "A Minecraft plugin that allows server administrators to much more easily manage server resource packs. \
      No need to edit the server.properties or restart the server. It even supports per-world resource packs.",
    techStack: "Java, Maven, SpigotMC API.",
    link: "https://www.spigotmc.org/resources/packmanagerpro.105819/",
    githubLink: "https://github.com/NaspoDev/PackManagerPro",
  },

  // Showcase
  {
    title: "Showcase",
    description:
      "A Minecraft plugin that allows players to show off their prized possessions by storing them in a publicly viewable GUI.",
    techStack: "Java, Maven, SpigotMC API.",
    link: "https://www.spigotmc.org/resources/showcase.101606/",
    githubLink: "https://github.com/NaspoDev/Showcase",
  },

  // Password Generator
  {
    title: "Password Generator",
    description:
      "Generate random secure passwords, all while being able to specify length and characters used. You can also validate existing passwords.",
    techStack: "Plain old TypeScript with HTML and CSS.",
    link: "https://password-generator.naspoapps.com/",
    githubLink: "https://github.com/NaspoDev/PasswordGenerator",
  },
];

export default projects;
