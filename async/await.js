const { promises: fs } = require("fs");

const main = async () => {
  try {
    console.time("truc");
    const list = await fs.readdir(".");
    console.timeLog("truc");
    console.log("list: ", list);
    const content = await fs.readFile(list[0], { encoding: "utf-8" });
    console.log("content: ", content);
  } catch (err) {
    console.log("err: ", err);
  }
};

main();
