const { DataTypes, Model } = require("sequelize");
const sequelize = require("./database");
const Resposta = require("./Resposta");
const Usuario = require("./Usuario");

const RespostaLikes = sequelize.define(
  "RespostaLikes",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    respostaId: {
      type: DataTypes.INTEGER,
      references: {
        model: Resposta,
        key: "id",
      },
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuario,
        key: "id",
      },
    },
    dataCriacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    uniqueKeys: {
      actions_unique: {
        fields: ["respostaId", "usuarioId"],
      },
    },
  }
);

module.exports = RespostaLikes;
