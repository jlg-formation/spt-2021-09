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
  }

  constructor() {
    this.state = STATE.DEFAULT;
  }
}
