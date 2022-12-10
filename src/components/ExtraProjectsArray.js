import Todo from "../assets/projects/todolist.png";
import CVBuilder from "../assets/projects/cv-builder.png";
import Blog from "../assets/projects/blog.png";
import Readly from "../assets/projects/readly.png";
import Restaurant from "../assets/projects/restaurant.png";
import Dashboard from "../assets/projects/dashboard.png";

const MoreProjectsArray = [
  {
    title: "Rubber Ducky Blog",
    image: Blog,
    description: `The Rubber Ducky Blog is a blog that utilizes the MERN stack. Users can browse posts and leave comments. Information is displayed from a REST API endpoint.
    `,
    liveLink: "https://wise-guru.github.io/restaurant-page/",
    githubLink: "https://github.com/wise-guru/restaurant-page"
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
    title: "Restaurant Page",
    image: Restaurant,
    description: `A single-page application made using HTML, CSS, JS, and Webpack. Utilizes ES6 modules and dynamic webpage changes using JS DOM manipulation. A key feature of this project was using Javascript alone to generate the entire DOM of this website.
  `,
    liveLink: "https://wise-guru.github.io/restaurant-page/",
    githubLink: "https://github.com/wise-guru/restaurant-page"
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
