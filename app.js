require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./config/db/index");
const PORT = process.env.SERVER_PORT;
const cors = require("cors");
const router = require("./routes");
const { User, Visit, Properties, Favorites, Categories } = require("./models");

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use("/api", router);

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on port : ${PORT}`));
});
