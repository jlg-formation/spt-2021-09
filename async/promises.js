const fs = require("fs");

function readdir(dirname) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (err, list) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(list);
    });
  });
}

function readFile(filename, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, options, (err, content) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(content);
    });
  });
}

console.time("truc");
readdir(".")
  .then((list) => {
    console.timeLog("truc");
    console.log("list: ", list);
    return readFile(list[0], { encoding: "utf-8" });
  })
  .then((content) => {
    console.log("content: ", content);
  })
  .catch((err) => {
    console.log("err: ", err);
  });
