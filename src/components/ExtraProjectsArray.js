import Todo from "../assets/projects/todolist.png";
import CVBuilder from "../assets/projects/cv-builder.png";
// import Blog from "../assets/projects/blog.png";
import GA from "../assets/projects/greys-anatomy.png";
import Cico from "../assets/projects/cico.gif";
import Readly from "../assets/projects/readly.png";
// import Restaurant from "../assets/projects/restaurant.png";
import Dashboard from "../assets/projects/dashboard.png";

const MoreProjectsArray = [
  {
    title: "Cico Mode",
    image: Cico,
    description: `Cico Mode is a web application that predicts weight over a period of time. Using
      inputs from a form, an HTML table is generated. It leverages React Hooks. I utilize
      Firebase for the backend, and an API for the BMI calculator.`,
    liveLink: "https://wise-guru.github.io/cico-mode/",
    githubLink: "https://github.com/wise-guru/cico-mode"
  },
  {
    title: "CV Builder",
    image: CVBuilder,
    description: `A web app that dynamically renders a formatted CV based on user inputs. This app leverages React class components to manage states
    and display a preview of the user's resume. More entries can be added for each section (education, experience, skills).
    `,
    liveLink: "https://wise-guru.github.io/cv-builder/",
    githubLink: "https://github.com/wise-guru/cv-builder"
  },
  // {
  //   title: "Restaurant Page",
  //   image: Restaurant,
  //   description: `A single-page application made using HTML, CSS, JS, and Webpack. Utilizes ES6 modules and dynamic webpage changes using JS DOM manipulation. A key feature of this project was using Javascript alone to generate the entire DOM of this website.
  // `,
  //   liveLink: "https://wise-guru.github.io/restaurant-page/",
  //   githubLink: "https://github.com/wise-guru/restaurant-page"
  // },
  {
    title: "To Dooley",
    image: Todo,
    description: `A CRUD application made using HTML, CSS, vanilla Javascript, and Webpack. Tasks are sorted into
    categories and given color-coded priorities (low, medium, and high.) Tasks are stored using localStorage. Users can edit, delete tasks,
    and check them off once completed. Features the use of ES6 principles, modular JS, and object oriented programming.
    `,
    liveLink: "https://wise-guru.github.io/todo-list/",
    githubLink: "https://github.com/wise-guru/todo-list"
  },
  {
    title: "Grey's Anatomy Universe API",
    image: GA,
    description: `A REST API for the Grey's Anatomy TV show universe. Created using Node.js, Express, and MongoDB. Users are able to query the episodes of shows from the GA universe through several parameters. Features documentation and a mobile-first design.
  `,
    liveLink: "https://greysanatomyuniverse-api.onrender.com/",
    githubLink: "https://github.com/wise-guru/greys-anatomy-universe-api"
  },
  {
    title: "Readly",
    image: Readly,
    description: `Readly is a virtual library made using HTML, CSS, AND Javascript. Vistors can add a "book" to their virtual library using a form. This app features client-side validation. 
  `,
    liveLink: "https://wise-guru.github.io/library/",
    githubLink: "https://github.com/wise-guru/library"
  },
  {
    title: "Admin Dashboard",
    image: Dashboard,
    description: `A static dashboard made using HTML and CSS. Features the use of CSS grid and other CSS3 techniques.
  `,
    liveLink: "https://wise-guru.github.io/admin-dashboard/",
    githubLink: "https://wise-guru.github.io/admin-dashboard/"
  }
];

export default MoreProjectsArray;
