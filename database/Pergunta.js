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
    id_autor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuarios",
        key: "id",
      },
      onDelete: "SET NULL",
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
