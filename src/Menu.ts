export class Menu {
  add(selector: string, callback: any) {
    document.querySelector(selector).addEventListener("click", callback);
  }
}
