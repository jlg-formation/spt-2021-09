const fs = require("fs");

try {
  console.time("truc");
  const list = fs.readdirSync(".");
  console.timeLog("truc");
  console.log("list: ", list);
  const content = fs.readFileSync(list[0], { encoding: "utf-8" });
  console.log("content: ", content);
} catch (err) {
  console.log("err: ", err);
}
