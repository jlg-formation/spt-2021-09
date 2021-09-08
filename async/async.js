const fs = require("fs");

console.time("truc");
fs.readdir(".", (err, list) => {
  if (err) {
    console.log("err: ", err);
    return;
  }
  console.timeLog("truc");
  console.log("list: ", list);
  fs.readFile(list[0], { encoding: "utf-8" }, (err, content) => {
    if (err) {
      console.log("err: ", err);
      return;
    }
    console.log("content: ", content);
  });
});
