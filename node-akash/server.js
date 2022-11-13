const express = require("express");
const fetch = require("node-fetch");
const { stringify } = require("csv-stringify");
const fs = require("fs");
const _ = require("lodash");
const PORT = 8001;

const app = express();
app.use(express.json());

const columns = [
  "id",
  "first_name",
  "last_name",
  "username",
  "email",
  "avatar",
  "gender",
  "date_of_birth",
  "address",
];

app.get("/get-user", (req, res) => {
  try {
    fetch(
      "https://random-data-api.com/api/v2/users?size=1&response_type=json"
    ).then(async (data) => {
      data = await data.json();

      let filteredData = [];
      _.each(columns, (column) => {
        if (_.isEqual(column, "address")) {
          delete data[column]['coordinates'];
          let address = Object.values(_.get(data, column)).join();
          filteredData.push(address);
        } else {
          filteredData.push(_.get(data, column).toString());
        }
      });
      filteredData = [filteredData];
      stringify(
        filteredData,
        { header: false },
        (err, output) => {
          if (err) throw err;
          fs.appendFile("users.csv", output, (err) => {
            if (err) throw err;
          });
        }
      );
      return res.send(data);
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
