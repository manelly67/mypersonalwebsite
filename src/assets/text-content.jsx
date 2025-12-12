import screenshot1 from "./img/screenshot-project1.jpg";
import screenshot2 from "./img/screenshot-project2.jpg";
import screenshot3 from "./img/screenshot-project3.jpg";
import screenshot4 from "./img/screenshot-project4.jpg";
import screenshot5 from "./img/screenshot-project5.jpg";
import screenshot6 from "./img/screenshot-project6.jpg";
import screenshot7 from "./img/screenshot-project7.jpg";
import screenshot_S1 from "./img/screenshot-S1.jpg";

import { Project } from "./class-project";

const myName = "Maria Nelly Lopez";

const textContentAboutMe = (
  <p>
    <span>Hi!. </span>I am a CPA with over 25 years of experience and recently
    completed a full-stack development bootcamp in which I successfully built
    several projects using Javascript, React, Sql, Prisma and Nodejs.
    <br></br>
    <br></br>
    My current focus is on combining my accounting skills with technology
    solutions: developing financial applications, automating accounting tasks
    and creating web tools for reporting, reconciliation and analysis.
  </p>
);

const textContentContactMe =
  "If you think that my work fits what you need, write to me.";

const mailText = "manellylopez@yahoo.com";

const githubAccount = "https://github.com/manelly67";
const linkedinAccount = "https://www.linkedin.com/in/marianellylopez";

const project1 = new Project("project1");
project1.projectName = "A Messaging App";
project1.projectDescription =
  "NodeJs Express API with Prisma ORM. Includes authorization and a ReactJs frontend.";
project1.screenshotProjectSource = screenshot1;
project1.githubHref =
  "https://github.com/manelly67/TheOdinProject-Backend-MessagesApp";
project1.projectNewWindow = "https://whitedove.netlify.app";

const project2 = new Project("project2");
project2.projectName = "A Tagging App";
project2.projectDescription =
  "NodeJs Express API with Prisma ORM. Includes best score board and ReactJs frontend.";
project2.screenshotProjectSource = screenshot2;
project2.githubHref =
  "https://github.com/manelly67/TheOdinProject-WhereIsWaldo-Backend";
project2.projectNewWindow = "https://whereisthegame.netlify.app";

const project3 = new Project("project3");
project3.projectName = "Personal websites for independent professionals";
project3.projectDescription =
  "Javascript bundled with Webpack, implements a dynamic content display.";
project3.screenshotProjectSource = screenshot3;
project3.githubHref =
  "https://github.com/javierdiaz-teaches-you-spanish/homepage";
project3.projectNewWindow =
  "https://javierdiaz-teaches-you-spanish.github.io/homepage";

const project4 = new Project("project4");
project4.projectName = "Against Computer Game - Battleship";
project4.projectDescription =
  "Javascript bundled with Webpack. TDD for the logic.";
project4.screenshotProjectSource = screenshot4;
project4.githubHref = "https://github.com/manelly67/TheOdinProject-Battleship";
project4.projectNewWindow =
  "https://manelly67.github.io/TheOdinProject-Battleship";

const project5 = new Project("project5");
project5.projectName = "An e-Commerce Website";
project5.projectDescription =
  "ReactJs API Data Fetching. Handling routing and navigation.";
project5.screenshotProjectSource = screenshot5;
project5.githubHref =
  "https://github.com/manelly67/TheOdinProject-Shopping-Cart";
project5.projectNewWindow =
  "https://shopping-cart-manelly67.netlify.app/homepage";

const project6 = new Project("project6");
project6.projectName = "Tracking Game - Memory Card";
project6.projectDescription = "ReactJs API Data Fetching.";
project6.screenshotProjectSource = screenshot6;
project6.githubHref =
  "https://github.com/manelly67/TheOdinProject-memory-card-game";
project6.projectNewWindow = "https://memory-game-manelly67.netlify.app";

const project7 = new Project("project7");
project7.projectName = "Script for repetitive accounting tasks";
project7.projectDescription =
  "A well-designed Google Sheets + Google Apps Script system. The purpose of these scripts is to adapt them to the needs of each individual customer.";
project7.screenshotProjectSource = screenshot7;
project7.details =
  "https://manelly67.github.io/script-for-accounting-how-it-works";

const project_S1 = new Project("project_S1");
project_S1.projectName = "Budget Expenditure Control";
project_S1.projectDescription =
  "React for UI state management and D3.js for complex chart rendering and data-driven calculations";
project_S1.screenshotProjectSource = screenshot_S1;
project_S1.details =
  "https://manelly67.github.io/ExpenditureControl-HowItWorks";
project_S1.projectNewWindow = "https://coffeetea.netlify.app";

const arrayProjects = [
  project_S1,
  project7,
  project3,
  project1,
  project2,
  project4,
  project5,
  project6,
];

const additional1 = {
  title: "GitHub Achievements",
  text: "@manelly67 opened pull requests that have been merged in an open source project",
  PR1_text: "Moved workflow diagram to the next lesson",
  PR1_link: "https://github.com/TheOdinProject/curriculum/pull/29906",
  PR2_text: "Added note clarifying about the syntax in the lesson",
  PR2_link: "https://github.com/TheOdinProject/curriculum/pull/29895",
  PR3_text: "Add section called PostgreSQL shell",
  PR3_link: "https://github.com/TheOdinProject/curriculum/pull/30394",
};

const additionalContent = [additional1];

export {
  myName,
  textContentAboutMe,
  arrayProjects,
  additionalContent,
  textContentContactMe,
  mailText,
  githubAccount,
  linkedinAccount,
};
