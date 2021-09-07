export class Menu {
  add(selector, callback) {
    document.querySelector(selector).addEventListener("click", callback);
  }
}
