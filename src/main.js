import "./style.css";

import { Menu } from "./Menu";
import { DrawingBoard, STATE } from "./DrawingBoard";

const board = new DrawingBoard();
const menu = new Menu();

menu.add("button.add-line", () => {
  console.log("about to add a line");
  board.state = STATE.INSERT;
});
menu.add("button.add-circle", () => {
  console.log("about to add a circle");
  board.state = STATE.INSERT;
});
menu.add("button.erase-object", () => {
  console.log("about to erase the selected object");
  board.state = STATE.DEFAULT;
});
