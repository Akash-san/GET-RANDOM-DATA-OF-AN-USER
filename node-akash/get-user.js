var readline = require("readline");
const fs = require("fs");
const { EOL } = require('os');

let rlConsole = readline.createInterface(process.stdin, process.stdout);

function recursiveAsyncReadLine() {
  rlConsole.question("Enter id of the user to search : ", async function (userId) {
    if (userId == "exit") return rlConsole.close();

    const fileStream = fs.createReadStream('users.csv');

    const rlFile = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    let userFound = false;
    for await (const line of rlFile) {
      if (line.includes(userId)) {
        console.log(`${line}${EOL}`);
        userFound = true;
        break;
      }
    }
    if (!userFound) {
      console.log(`user not found${EOL}`);
    }
    recursiveAsyncReadLine();
  });
};

recursiveAsyncReadLine();
