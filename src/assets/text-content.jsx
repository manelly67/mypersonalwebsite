import screenshot1 from './img/screenshot-project1.png';
import screenshot2 from './img/screenshot-project2.png';
import screenshot3 from './img/screenshot-project3.png';
import screenshot4 from './img/screenshot-project4.png';
import screenshot5 from './img/screenshot-project5.png';
import screenshot6 from './img/screenshot-project6.png';
import { Project } from './class-project';

const textContentAboutMe =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

const textContentContactMe =
  'If you think my work fits what you need, call or write to me.';
const phoneText = '123-4567-890';
const mailText = 'my.email.adress@gmail.com';

const githubAccount = 'https://github.com/manelly67';
/* const linkedinAccount = 'https://www.linkedin.com/in/marianellylopez'; */
const linkedinAccount = '';

const project1 = new Project('project1');
project1.projectName = 'Project1 Name';
project1.projectDescription =
  'Short description of the project1. Just a couple sentences will do.';
project1.screenshotProjectSource = screenshot1;
project1.githubHref = '#';
project1.projectNewWindow = '#';

const project2 = new Project('project2');
project2.projectName = 'Project2 Name';
project2.projectDescription =
  'Short description of the project2. Just a couple sentences will do.';
project2.screenshotProjectSource = screenshot2;
project2.githubHref = '#';
project2.projectNewWindow = '#';

const project3 = new Project('project3');
project3.projectName = 'Project3 Name';
project3.projectDescription =
  'Short description of the project3. Just a couple sentences will do.';
project3.screenshotProjectSource = screenshot3;
project3.githubHref = '#';
project3.projectNewWindow = '#';

const project4 = new Project('project4');
project4.projectName = 'Project4 Name';
project4.projectDescription =
  'Short description of the project4. Just a couple sentences will do.';
project4.screenshotProjectSource = screenshot4;
project4.githubHref = '#';
project4.projectNewWindow = '#';

const project5 = new Project('project5');
project5.projectName = 'Project5 Name';
project5.projectDescription =
  'Short description of the project5. Just a couple sentences will do.';
project5.screenshotProjectSource = screenshot5;
project5.githubHref = '#';
project5.projectNewWindow = '#';

const project6 = new Project('project6');
project6.projectName = 'The Weather App';
project6.projectDescription =
  'Requesting data from an API, using asynchronous javascript code.';
project6.screenshotProjectSource = screenshot6;
project6.githubHref = 'https://github.com/manelly67/TheOdinProject-WeatherApp';
project6.projectNewWindow =
  'https://manelly67.github.io/TheOdinProject-WeatherApp';

const arrayProjects = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
];

export {
  textContentAboutMe,
  arrayProjects,
  textContentContactMe,
  phoneText,
  mailText,
  githubAccount,
  linkedinAccount,
};