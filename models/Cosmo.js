const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cosmo extends Model {}

Cosmo.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact_info: {
            type: DataTypes.STRING,
            allowNull: false
        },
        specialties: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cosmo_bio: {
            type: DataTypes.STRING(1000),
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Cosmo',
        timestamps: false
      }
);

module.exports = Cosmo;