"use strict";
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class Characters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Characters.belongsToMany(models.data, {
        through: "UserData",
        as: "favCharacters",
        foreignKey: "charactersId",
      });
    }
  }
  Characters.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      charactersId: DataTypes.STRING,
      name: DataTypes.STRING,
      species: DataTypes.STRING,
      house: DataTypes.STRING,
      wizard: DataTypes.STRING,
      ancestry: DataTypes.STRING,
      wand: DataTypes.JSON,
      patronus: DataTypes.STRING,
      actor: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Characters",
    }
  );
  return Characters;
};
