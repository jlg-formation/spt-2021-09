import { Widget } from "../Widget";
import { DrawingBoard } from "./../DrawingBoard";

export class Line extends Widget {
  x1 = 0;
  y1 = 0;
  x2 = 0;
  y2 = 0;

  depose(board: DrawingBoard) {
    this.deposeContent(board);
    this.deposeSelection(board);
  }

  deposeContent(board: DrawingBoard) {
    const { x: x1, y: y1 } = board.curPos;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x1 + 50;
    this.y2 = y1 + 40;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", "" + this.x1);
    line.setAttribute("y1", "" + this.y1);
    line.setAttribute("x2", "" + this.x2);
    line.setAttribute("y2", "" + this.y2);
    line.setAttribute("data-id", this.id);

    board.contentElt.appendChild(line);
  }

  deposeSelection(board: DrawingBoard) {
    const { x: x1, y: y1 } = board.curPos;
    const x2 = x1 + 50;
    const y2 = y1 + 40;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", "" + x1);
    line.setAttribute("y1", "" + y1);
    line.setAttribute("x2", "" + x2);
    line.setAttribute("y2", "" + y2);
    line.setAttribute("data-id", this.id);

    board.selectionElt.appendChild(line);

    line.addEventListener("click", (event: Event) => {
      event.stopPropagation();
      console.log("click on line");
      board.select(this);
    });
  }

  select(board: DrawingBoard) {
    board.unselect();
    this.addEditionPoint(board, { x: this.x1, y: this.y1 });
    this.addEditionPoint(board, { x: this.x2, y: this.y2 });
  }
}
