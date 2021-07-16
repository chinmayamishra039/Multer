const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect("mongodb://localhost:27017/upload-files-database", {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connect to Mongodb....."))
    .catch((err) => console.log(err.message));
};
