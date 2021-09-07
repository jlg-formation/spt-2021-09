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
    this._state = val;
  }

  get state() {
    return this._state;
  }

  constructor() {
    this.state = STATE.DEFAULT;
    console.log("this: ", this);
    document.querySelector("svg").addEventListener("click", () => {
      console.log("click on svg", this);
      console.log("this.state: ", this.state);
      if (this.state === STATE.INSERT) {
        this.insertEnd();
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
