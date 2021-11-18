const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class ImgBox extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        filename: {
          type: DataTypes.STRING(300),
          allowNull: false,
        },
        fileURL: {
          type: DataTypes.STRING(500),
          allowNull: false,
        },
      },
      {
        modelName: " ImgBox",
        tableName: "imgBoxs",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {}
};
