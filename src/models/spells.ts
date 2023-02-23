"use strict";
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class Spells extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spells.belongsToMany(models.data, {
        through: "UserData",
        as: "favSpells",
        foreignKey: "spellsId",
      });
    }
  }
  Spells.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      spellsId: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Spells",
    }
  );
  return Spells;
};
