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

  contentElt: SVGGElement;
  curPos: Point = { x: 0, y: 0 };
  cursorPosElt: any;
  selectionElt: SVGGElement;
  editionElt: SVGGElement;
  svgElt: SVGElement;
  widgetBeingInserted!: Widget;
  selectedWidget!: Widget;

  constructor() {
    this.svgElt = document.querySelector("svg.svg") as SVGElement;
    this.contentElt = document.querySelector(
      "svg.svg g.content"
    ) as SVGGElement;
    this.selectionElt = document.querySelector(
      "svg.svg g.selection"
    ) as SVGGElement;
    this.editionElt = document.querySelector(
      "svg.svg g.edition"
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
      if (this.state === STATE.SELECTION) {
        this.unselect();
        this.state = STATE.DEFAULT;
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
  unselect() {
    this.editionElt.parentElement?.removeChild(this.editionElt);
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "edition");
    this.svgElt.appendChild(g);
    this.editionElt = g;
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

  select(widget: Widget) {
    this.state = STATE.SELECTION;
    this.selectedWidget = widget;
    widget.select(this);
  }
}
