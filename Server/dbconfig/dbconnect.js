const mongoose = require("mongoose");

function dbconnet() {
  mongoose
    .connect(
      "mongodb+srv://todoapp:todoapp@crud.4akof.mongodb.net/todoapp?retryWrites=true&w=majority&appName=crud"
    )
    .then(console.log("database connected"))
    .catch(() => {
      console.log("something went missing in db");
    });
}

module.exports = dbconnet;
