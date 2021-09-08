import { Widget } from "../Widget";
import { DrawingBoard } from "./../DrawingBoard";

export class Line extends Widget {
  depose(board: DrawingBoard) {
    const { x: x1, y: y1 } = board.curPos;
    const x2 = x1 + 50;
    const y2 = y1 + 40;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", "" + x1);
    line.setAttribute("y1", "" + y1);
    line.setAttribute("x2", "" + x2);
    line.setAttribute("y2", "" + y2);

    board.contentElt.appendChild(line);
  }
}
