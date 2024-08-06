const { DataTypes, Model } = require("sequelize");
const sequelize = require("./database");

class RespostaLike extends Model {}

RespostaLike.init(
  {
    respostaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "resposta",
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
      onDelete: "CASCADE",
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "RespostaLike",
    tableName: "resposta_likes",
    timestamps: false,
  }
);

module.exports = RespostaLike;
