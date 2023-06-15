const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_HOST)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server running. Use our API on port: 3000");
    });
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.massage);
    process.exit(1);
  });
