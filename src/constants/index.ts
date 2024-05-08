import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
  TEducation,
  TSocialLink,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  fastapi,
  googleCloud,
  docker,

  meta,
  incf,
  nsut,
  passbolt,


  gitspotlight,
  calorico,
  brian,

  linkedin,
  github,

} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Open Source Contributor",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "FastApi",
    icon: fastapi,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Google Cloud",
    icon: googleCloud,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "passbolt",
    icon: passbolt,
  }
];

const experiences: TExperience[] = [
  {
    title: "Software Developer Intern",
    companyName: "Passbolt",
    icon: passbolt,
    iconBg: "#1f1f1f",
    date: "May 2023 - August 2023",
    points: [
      "Learning and Development: Acquired proficiency in CakePHP, PHPUnit, and Docker, enhancing my ability to develop and test secure, scalable applications",
      "Unit Testing: Spearheaded the implementation of unit tests for Passbolt, ensuring the reliability and robustness of the application",
    ],
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "CakePHP",
        color: "green-text-gradient",
      },
      {
        name: "PHPUnit",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    title: "Software Engineering Fellow",
    companyName: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "September 2023 - December 2023",
    points: [
      "Empowered Indexers: Integrating Scip-Python and Dotnet Indexer support. Engineered binaries, wrappers, and robust test suites for seamless, reliable integration.",
      " Enhanced Glass Functionality: Upgraded Glass for Scip-Python and Dotnet Indexers, reinforcing stability through revised schemas and exhaustive tests",
      "Optimized Documentation: Elevated clarity and usability of Scip-Python and Dotnet Indexer documentation, enhancing Glean.software accessibility",

    ],
    tags: [
      {
        name: "Haskell",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "Linux",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    title: "Gooogle Summer of Code Mentee",
    companyName: "International Neuroinformatics Coordinating Facility",
    icon: incf,
    iconBg: "#383E56",
    date: "May 2023 - November 2023",
    points: [
      "Developing VS Code Extension for Brian: Developing a comprehensive VS Code extension for the Brian neural simulator, which included the implementation of key functionalities such as syntax highlighting, syntax checking, and auto-completion, resulting in an enhanced coding experience for users",
      " Created .brian File Support: Pioneered a brand-new file format, .brian, for defining neural models in Brian and integrated support for creating and editing these files into the Brian neural simulator.",
    "Language Server Protocol: Defined a Language Server Protocol (LSP) using Python, including support for auto-completion and diagnostic features.",
    "Contributing to the enhancement of Brian’s ecosystem: Improving Brian’s usability and developer experience by creating a dedicated VS Code extension, empowering users with enhanced editing capabilities",
    ],
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Pygls",
        color: "green-text-gradient",
      },
      {
        name: "VS Code API",
        color: "pink-text-gradient",
      },
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Marcel Stimberg",
    designation: "Research Engineer",
    company: "Sorbonne Université, Paris",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWsE8bYdgASVWneySHH5IGIL1bGhRRjdo5Pr4dnv38HU1Y=s48-p",
  },
  {
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Don Stewart",
    designation: "Software Engineer",
    company: "Meta",
    image: "https://avatars.githubusercontent.com/u/706040?v=4",
  },
  {
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Gencarlo Fissore",
    designation: "Software Engineer",
    company: "Meta",
    image: "https://avatars.githubusercontent.com/u/5137220?v=4",
  },
  {
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Remy Bertot",
    designation: "CTO & Co-Founder",
    company: "Passbolt",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWhfLChWm8EVO9xnHA4w87b03_6Fycxddd4dJGV4ZyOJbY=s80-p",
  },
];

const projects: TProject[] = [
  {
    name: "GitSpotLight",
    description:
    "A application that help developers to track their github profile and repositories, and provide insights about their github profile. ",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Github API",
        color: "pink-text-gradient",
      },
      {
        name: "Chart JS",
        color: "green-text-gradient",
      }
    ],
    image: gitspotlight,
    sourceCodeLink: "https://github.com/AbhishekTiwari23/GitSpotLight",
  },
  {
    name: "Calori Co",
    description:
      " A health platform for personalised calories management, helping users track their daily intake and meet their calorie requirement",
    tags: [
      {
        name: "FastApi",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Sqliite",
        color: "pink-text-gradient",
      },
    ],
    image: calorico,
    sourceCodeLink: "https://github.com/AbhishekTiwari23/CaloriCo",
  },
  {
    name: "Brian VS Code Extension",
    description:
      "VS Code extension, provides support for .brian file, syntax highlighting, auto-completion and syntax check",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Pygls",
        color: "green-text-gradient",
      },
      {
        name: "VS Code API",
        color: "pink-text-gradient",
      },
    ],
    image: brian,
    sourceCodeLink: "https://github.com/brian-team/brian-code-editor",
  },
];

const educations: TEducation[] = [
  {
    title: "Bachelor of Technology",
    institute_name: "Netaji Subhas University of Technology",
    icon: nsut,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Major: Electronics and Communication Engineering",
      "Minor: Internet of Things",
    ],
  },
];

const socialLinks: TSocialLink = [
{
  id: 1,
  platform: "LinkedIn",
  url: "https://www.linkedin.com/in/tiwariabhishek23/",
  icon: linkedin,
},
{
  id: 2,
  platform: "GitHub",
  url: "https://github.com/abhishektiwari23",
  icon: github,
}
];

export { services, technologies, experiences, testimonials, projects, educations, socialLinks};
