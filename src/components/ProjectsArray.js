import Cico from "../assets/projects/cico.gif";
import Memory from "../assets/projects/memory.gif";
import Shopping from "../assets/projects/shopping.gif";
import Waldo from "../assets/projects/waldo.gif";
import CV from "../assets/projects/cv.gif";
import Todo from "../assets/projects/todo.gif";

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
      stored coordinated in Firebase.`,
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
    title: "To Dooley",
    gif: Todo,
    description: `A CRUD application made using HTML, CSS, vanilla Javascript, and Webpack. Tasks are sorted into 
    categories and given color-coded priorities (low, medium, and high.) Tasks are stored using localStorage. Users can also edit and delete tasks, 
    as well as check them off once completed. Features the use of ES6 principles, modular JS, and object oriented programming.
    `,
    liveLink: "https://wise-guru.github.io/todo-list/",
    githubLink: "https://github.com/wise-guru/todo-list"
  },
  {
    title: "CV Builder",
    gif: CV,
    description: `A web app that dynamically renders a formatted CV based on user inputs. This app leverages React class components to manage states
    and display a preview of the user's resume. 
    `,
    liveLink: "https://wise-guru.github.io/cv-builder/",
    githubLink: "https://github.com/wise-guru/cv-builder"
  },
  {
    title: "Memory Time",
    gif: Memory,
    description: `A memory card game built with React Functional Components. Players must click through
      each character once to win. With each click, the state is updated and the cards are
      shuffled accordingly.`,
    liveLink: "https://wise-guru.github.io/memory-card/",
    githubLink: "https://github.com/wise-guru/memory-card"
  }
];

export default projectsArray;
