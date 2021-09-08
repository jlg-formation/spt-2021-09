import { DrawingBoard, STATE } from "./DrawingBoard";
import { Menu } from "./Menu";
import "./style.css";
import { Circle } from "./widget/Circle";
import { Line } from "./widget/Line";

const board = new DrawingBoard();
const menu = new Menu();

menu.add("button.add-line", () => {
  console.log("about to add a line");
  board.insertStart(new Line());
});
menu.add("button.add-circle", () => {
  console.log("about to add a circle");
  board.insertStart(new Circle());
});
menu.add("button.erase-object", () => {
  console.log("about to erase the selected object");
  if (board.state === STATE.SELECTION) {
    board.deleteSelectedWidget();
  }
  board.state = STATE.DEFAULT;
});
