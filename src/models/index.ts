"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
import process from "process";
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../../config/config.json")[env];
const db = {};

//@ts-ignore
let sequelize: any;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file: any) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file: any) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    //@ts-ignore
    db[model.name] = model;
  });
//@ts-ignore
Object.keys(db).forEach((modelName) => {
  //@ts-ignore
  if (db[modelName].associate) {
    //@ts-ignore
    db[modelName].associate(db);
  }
});
//@ts-ignore
db.sequelize = sequelize;
//@ts-ignore
db.Sequelize = Sequelize;

// module.exports = db;
export default db;
