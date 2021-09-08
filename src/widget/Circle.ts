import { DrawingBoard } from "../DrawingBoard";
import { Widget } from "../Widget";

export class Circle extends Widget {
  cx = 0;
  cy = 0;
  r = 30;
  depose(board: DrawingBoard) {
    this.deposeContent(board);
    this.deposeSelection(board);
  }

  deposeContent(board: DrawingBoard) {
    const { x: cx, y: cy } = board.curPos;
    this.cx = cx;
    this.cy = cy;
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );

    circle.setAttribute("cx", "" + cx);
    circle.setAttribute("cy", "" + cy);
    circle.setAttribute("r", "" + this.r);

    board.contentElt.appendChild(circle);
  }

  deposeSelection(board: DrawingBoard) {
    const { x: cx, y: cy } = board.curPos;
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );

    circle.setAttribute("cx", "" + cx);
    circle.setAttribute("cy", "" + cy);
    circle.setAttribute("r", "" + this.r);

    board.selectionElt.appendChild(circle);

    circle.addEventListener("click", (event: Event) => {
      event.stopPropagation();
      console.log("click on circle");
      board.select(this);
    });
  }

  select(board: DrawingBoard) {
    board.unselect();
    this.addEditionPoint(board, { x: this.cx, y: this.cy });
    this.addEditionPoint(board, { x: this.cx, y: this.cy - this.r });
  }
}
