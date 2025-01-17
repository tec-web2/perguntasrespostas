const { DataTypes, Model } = require("sequelize");
const sequelize = require("./database");

class Resposta extends Model {}

Resposta.init(
  {
    texto: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    perguntaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "pergunta",
        key: "id",
      },
      onDelete: "CASCADE",
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
    modelName: "Resposta",
    tableName: "resposta",
    timestamps: false,
  }
);

module.exports = Resposta;
