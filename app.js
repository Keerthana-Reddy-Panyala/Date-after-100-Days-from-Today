const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let date = new Date();
  let requiredDate = addDays(date, 100);
  response.send(
    `${requiredDate.getDate()}/${
      requiredDate.getMonth() + 1
    }/${requiredDate.getFullYear()}`
  );
});

module.exports = app;
