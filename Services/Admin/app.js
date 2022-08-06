const express = require("express");
const PORT = 4000;
const app = express();
const cors = require("cors");
const { connect } = require("./config/mongodb");
const routesAdmin = require("./routes/index");
const errorHandler = require("../Middleware/errorhandle");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/admin", routesAdmin)

app.use(errorHandler)

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log("🚀 ~ file: app.js ~ line 22 ~ app.listen ~ PORT", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
    throw new err;
  });
