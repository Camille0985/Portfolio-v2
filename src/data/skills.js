import vsCodeIcon from "../assets/icons/vscode.svg";
import htmlIcon from "../assets/icons/html5.svg";
import cssIcon from "../assets/icons/css.svg";
import sassIcon from "../assets/icons/sass.svg";
import jsIcon from "../assets/icons/javascript.svg";
import tsIcon from "../assets/icons/typescript.svg";
import reactIcon from "../assets/icons/react.svg";
import nodeIcon from "../assets/icons/nodedotjs.svg";
import expressIcon from "../assets/icons/express.svg";
import jwtIcon from "../assets/icons/jsonwebtokens.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import mongooseIcon from "../assets/icons/mongoose.svg";
import npmIcon from "../assets/icons/npm.svg";
import gitIcon from "../assets/icons/git.svg";
import githubIcon from "../assets/icons/github.svg";
import figmaIcon from "../assets/icons/figma.svg";
import notionIcon from "../assets/icons/notion.svg";
import postmanIcon from "../assets/icons/postman.svg";

const skills = {
  frontend: [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "Sass", icon: sassIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "TypeScript", icon: tsIcon },
    { name: "React", icon: reactIcon }
  ],
  backend: [
    { name: "Node.js", icon: nodeIcon },
    { name: "Express", icon: expressIcon },
    { name: "JWT", icon: jwtIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "Mongoose", icon: mongooseIcon }
  ],
  outils : [
    { name: "VS Code", icon: vsCodeIcon },
    { name: "npm", icon: npmIcon },
    { name: "Git", icon: gitIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "Notion", icon: notionIcon },
    { name: "Postman", icon: postmanIcon }
  ]
};

export default skills;
