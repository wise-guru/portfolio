import Cico from "../assets/projects/cico.gif";
import Memory from "../assets/projects/memory.gif";
import Shopping from "../assets/projects/shopping.gif";
import Waldo from "../assets/projects/waldo.gif";
import CV from "../assets/projects/cv.gif";
import Inventory from "../assets/projects/inventory.gif";
import Todo from "../assets/projects/todolist.png";
import Robots from "../assets/projects/robots.gif";

const projectsArray = [
  {
    title: "Cico Mode",
    gif: Cico,
    description: `Cico Mode is a web application that predicts weight over a period of time. Using
      inputs from a form, an HTML table is generated. It leverages React Hooks. I utilize
      Firebase for the backend, and an API for the BMI calculator.`,
    liveLink: "https://wise-guru.github.io/cico-mode/",
    githubLink: "https://github.com/wise-guru/cico-mode"
  },
  {
    title: "Where's Waldo",
    gif: Waldo,
    description: `A photo tagging app created with React. A key element of this project was calculating
      character coordinates based on dynamic window sizes, and checking user input against
      stored coordinates in Firebase.`,
    liveLink: "https://wise-guru.github.io/wheres-waldo/",
    githubLink: "https://github.com/wise-guru/wheres-waldo"
  },

  {
    title: "Useless Inventions",
    gif: Shopping,
    description: `A shopping cart web application that takes you through a simulated online shopping
      experience. This app makes strong use of storing state and React client-side routing.
      It heavily leverages props being passed down through the component tree and further
      deconstructs them to display specific product information.`,
    liveLink: "https://wise-guru.github.io/shopping-cart/",
    githubLink: "https://github.com/wise-guru/shopping-cart"
  },
  {
    title: "Game Inventory",
    gif: Inventory,
    description:
      "A CRUD application made using MongoDB, Express, and Node.js. Users can view and sort by all games, publishers, franchises, genres, and game instances (copies). Features the use of MVC pattern and pug template engine.",
    liveLink: "https://inventory-app-ls92.onrender.com/",
    githubLink: "https://github.com/wise-guru/inventory-app"
  },
  {
    title: "Robots Only",
    gif: Robots,
    description: `A site where members can write anonymous posts. Created with MongoDB, Node.js, and Express. 
      Members can see the author of a post while outsiders can only see messages and wonder who wrote it. Features user authentication, dark mode, and mobile responsiveness.`,
    liveLink: "https://robots-only.onrender.com/",
    githubLink: "https://github.com/wise-guru/robots-only"
  },
  {
    title: "Memory Time",
    gif: Memory,
    description: `A memory card game built with React Functional Components. Players must click through
      each character once to win. With each click, the state is updated and the cards are
      shuffled accordingly.`,
    liveLink: "https://wise-guru.github.io/memory-card/",
    githubLink: "https://github.com/wise-guru/memory-card"
  },
  {
    title: "To Dooley",
    gif: Todo,
    description: `A CRUD application made using HTML, CSS, vanilla Javascript, and Webpack. Tasks are sorted into
    categories and given color-coded priorities (low, medium, and high.) Tasks are stored using localStorage. Users can edit, delete tasks,
    and check them off once completed. Features the use of ES6 principles, modular JS, and object oriented programming.
    `,
    liveLink: "https://wise-guru.github.io/todo-list/",
    githubLink: "https://github.com/wise-guru/todo-list"
  },
  {
    title: "CV Builder",
    gif: CV,
    description: `A web app that dynamically renders a formatted CV based on user inputs. This app leverages React class components to manage states
    and display a preview of the user's resume. More entries can be added for each section (education, experience, skills). 
    `,
    liveLink: "https://wise-guru.github.io/cv-builder/",
    githubLink: "https://github.com/wise-guru/cv-builder"
  }
];

export default projectsArray;
