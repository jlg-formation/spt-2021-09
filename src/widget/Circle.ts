import { DrawingBoard } from "../DrawingBoard";
import { Widget } from "../Widget";

export class Circle extends Widget {
  depose(board: DrawingBoard) {
    const r = 30;
    const { x: cx, y: cy } = board.curPos;
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );

    circle.setAttribute("cx", "" + cx);
    circle.setAttribute("cy", "" + cy);
    circle.setAttribute("r", "" + r);

    board.contentElt.appendChild(circle);
  }
}
