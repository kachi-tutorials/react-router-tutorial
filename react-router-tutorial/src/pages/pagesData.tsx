import { routerType } from "../types/router.types";
import About from "./About";
import Home from "./Home";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home"
  },
  {
    path: "about",
    element: <About />,
    title: "about"
  }
];

export default pagesData;
