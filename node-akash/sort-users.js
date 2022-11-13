var readline = require("readline");
const fs = require("fs");
const { EOL } = require("os");

async function sortUser() {
  const fileStream = fs.createReadStream("users.csv");

  const rlFile = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let arrayOfUsers = [];
  for await (const line of rlFile) {
    arrayOfUsers.push(line.split(","));
  }
  arrayOfUsers.sort((a, b) => {
    if (a[1].toLowerCase() < b[1].toLowerCase()) {
      return -1;
    }
    if (a[1].toLowerCase() > b[1].toLowerCase()) {
      return 1;
    }
    return 0;
  });
  fs.truncateSync("users.csv", 0, () => {});
  for (const user of arrayOfUsers) {
    fs.appendFileSync("users.csv", user + EOL, (err) => {
      if (err) throw err;
    });
  }
}

sortUser();
