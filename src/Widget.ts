import { DrawingBoard } from "./DrawingBoard";
import { Point } from "./interfaces/Point";
export class Widget {
  addEditionPoint(board: DrawingBoard, p: Point) {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );

    circle.setAttribute("cx", "" + p.x);
    circle.setAttribute("cy", "" + p.y);
    circle.setAttribute("r", "" + 3);

    board.editionElt.appendChild(circle);
  }

  depose(board: DrawingBoard) {
    throw new Error("Method not implemented.");
  }

  select(board: DrawingBoard) {
    throw new Error("Method not implemented.");
  }
}
