import express, { Request, Response } from "express";

const bodyParser = require("body-parser");
const userRoutes = require("./src/routes/user");
const charactersRoutes = require("./src/routes/characters");
const studentsRoutes = require("./src/routes/students");
const staffRoutes = require("./src/routes/staff");
const spellsRoutes = require("./src/routes/spells");
const sequelize = require("./src/services/db");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request: Request, response: Response) => {
  response.json("Hello World!");
});

app.use("/user", userRoutes);
app.use("/characters", charactersRoutes);
app.use("/students", studentsRoutes);
app.use("/staff", staffRoutes);
app.use("/spells", spellsRoutes);

try {
  // await sequelize.sync({ force: true });
  app.listen(port, () => {
    console.log("fisting on port " + port);
  });
} catch (error) {
  process.exit(1);
}
