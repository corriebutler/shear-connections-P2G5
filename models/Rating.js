const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Rating extends Model {}

Rating.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        value: {
            type: DataTypes.INTEGER,
            values: [1, 2, 3, 4, 5],
            allowNull: false
        },
        cosmo_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Cosmo',
                key: 'user_name'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'rating',
      }
);

module.exports = Rating;

