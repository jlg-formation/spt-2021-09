import "./style.css";

import { Menu } from "./Menu";

const menu = new Menu();
menu.add("button.add-line", () => {
  console.log("about to add a line");
});
menu.add("button.add-circle", () => {
  console.log("about to add a circle");
});
menu.add("button.erase-object", () => {
  console.log("about to erase the selected object");
});
