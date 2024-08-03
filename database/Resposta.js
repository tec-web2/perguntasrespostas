const { DataTypes, Model } = require("sequelize");
const sequelize = require("./database");

class Resposta extends Model {}

Resposta.init(
  {
    texto: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nome_autor: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    perguntaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Resposta",
    tableName: "resposta",
    timestamps: false,
  }
);

module.exports = Resposta;
