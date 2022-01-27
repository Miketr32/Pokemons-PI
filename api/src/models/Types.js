const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('types', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true
        }
    },
    { timestamps: false }
    )};
