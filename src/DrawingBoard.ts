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
  private _state: any;

  curPos: Point = { x: 0, y: 0 };
  cursorPosElt: any;
  svgElt: SVGElement;
  widgetBeingInserted!: Widget;
  contentElt: SVGGElement;

  constructor() {
    this.svgElt = document.querySelector("svg.svg") as SVGElement;
    this.contentElt = document.querySelector(
      "svg.svg g.content"
    ) as SVGGElement;
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

  get state() {
    return this._state;
  }

  set state(val) {
    console.log("val: ", val);
    const elt = document.querySelector(".status") as HTMLElement;
    elt.innerHTML = val;
    this.svgElt.setAttribute("class", "svg");
    this.svgElt.classList.add(val);
    this.cursorPosElt.innerHTML = "";
    this._state = val;
  }

  insertEnd() {
    console.log("insertEnd");
    this.state = STATE.DEFAULT;
    this.widgetBeingInserted.depose(this);
  }

  insertStart(widget: Widget) {
    console.log("startToInsert");
    this.state = STATE.INSERT;
    this.widgetBeingInserted = widget;
  }
}
