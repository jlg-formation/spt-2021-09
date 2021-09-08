import { getPosition } from "./utils";

export const STATE = {
  DEFAULT: "default",
  INSERT: "insert",
  EDITION: "edition",
  SELECTION: "selection",
};

export class DrawingBoard {
  set state(val) {
    console.log("val: ", val);
    const elt = document.querySelector(".status");
    elt.innerHTML = val;
    const svgElt = document.querySelector("svg.svg");
    svgElt.setAttribute("class", "svg");
    svgElt.classList.add(val);
    this.cursorPosElt.innerHTML = "";
    this._state = val;
  }

  get state() {
    return this._state;
  }

  constructor() {
    this.cursorPosElt = document.querySelector(".cursor-position");
    this.state = STATE.DEFAULT;
    console.log("this: ", this);

    document.querySelector("svg").addEventListener("click", () => {
      console.log("click on svg", this);
      console.log("this.state: ", this.state);
      if (this.state === STATE.INSERT) {
        this.insertEnd();
      }
    });

    document.querySelector("svg.svg").addEventListener("mousemove", (event) => {
      if (this.state === STATE.INSERT) {
        // on affiche les coordonnees.
        const { x, y } = getPosition(event);
        this.cursorPosElt.innerHTML = `position: { x: ${x}, y: ${y}}`;
      }
    });
  }

  insertStart(widget) {
    console.log("startToInsert");
    this.state = STATE.INSERT;
  }

  insertEnd() {
    console.log("insertEnd");
    this.state = STATE.DEFAULT;
  }
}
