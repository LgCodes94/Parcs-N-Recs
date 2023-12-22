const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../config/connection');

class UserPark extends Model { }

UserPark.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    park_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'park',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_park',
  }
);
module.exports = UserPark;
