import { Point } from "./interfaces/Point";
import { getPosition } from "./utils";
import { Widget } from "./Widget";

export const STATE = {
  DEFAULT: "default",
  INSERT: "insert",
  EDITION: "edition",
  SELECTION: "selection",
};

export class DrawingBoard {
  cursorPosElt: any;
  private _state: any;
  curPos: Point = { x: 0, y: 0 };
  widgetBeingInserted!: Widget;
  svgElt: SVGElement;
  set state(val) {
    console.log("val: ", val);
    const elt = document.querySelector(".status") as HTMLElement;
    elt.innerHTML = val;
    this.svgElt.setAttribute("class", "svg");
    this.svgElt.classList.add(val);
    this.cursorPosElt.innerHTML = "";
    this._state = val;
  }

  get state() {
    return this._state;
  }

  constructor() {
    this.svgElt = document.querySelector("svg.svg") as SVGElement;
    this.cursorPosElt = document.querySelector(".cursor-position");
    this.state = STATE.DEFAULT;
    console.log("this: ", this);

    this.svgElt.addEventListener("click", () => {
      console.log("click on svg", this);
      console.log("this.state: ", this.state);
      if (this.state === STATE.INSERT) {
        this.insertEnd();
      }
    });

    this.svgElt.addEventListener("mousemove", (event) => {
      if (this.state === STATE.INSERT) {
        // on affiche les coordonnees.
        const { x, y } = getPosition(event);
        this.curPos = { x, y };
        this.cursorPosElt.innerHTML = `position: { x: ${x}, y: ${y}}`;
      }
    });
  }

  insertStart(widget: Widget) {
    console.log("startToInsert");
    this.state = STATE.INSERT;
    this.widgetBeingInserted = widget;
  }

  insertEnd() {
    console.log("insertEnd");
    this.state = STATE.DEFAULT;
    this.widgetBeingInserted.depose(this.curPos);
  }
}
