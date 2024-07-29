const { DataTypes, Model } = require("sequelize");
const sequelize = require("./database");

class Pergunta extends Model {}

Pergunta.init(
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Pergunta",
    tableName: "pergunta",
    timestamps: false,
  }
);

module.exports = Pergunta;
