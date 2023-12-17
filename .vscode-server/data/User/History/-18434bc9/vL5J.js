var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("hey, prince song!");
    console.dir(err);
    return;
  }
  console.log(data);
});