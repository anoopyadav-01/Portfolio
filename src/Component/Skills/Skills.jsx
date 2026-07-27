import "./Skills.css";
const frontendSkills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
];

const backendSkills = [
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
];
const tools = [
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },

  {
    name: "Vercel",
    icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
  },
  {
    name: "npm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
];
function Skills() {
  return (
    <div id="skills-section" className="skills-section">
      <h2 className="skills-title">Tech Stack & Skills</h2>

      <div className="skill-category">
        <h3>Frontend</h3>

        <div className="skills-container">
          {frontendSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <h5>{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="skill-category">
        <h3>Backend</h3>

        <div className="skills-container">
          {backendSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <h5>{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="skill-category">
        <h3>Tools</h3>

        <div className="skills-container">
          {tools.map((tool, index) => (
            <div className="skill-card" key={index}>
              <img src={tool.icon} alt={tool.name} className="skill-icon" />
              <h5>{tool.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
