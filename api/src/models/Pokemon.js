const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('pokemon', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },                          
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 50]
      }
    },
    health: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 350                 
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 350                 
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 350                 
      }
    },
    speed: {
      type: DataTypes.INTEGER,

    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 350                 
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 350                 
      }
    },
    image: {
      type: DataTypes.STRING,
      validate:{
        isUrl: true
      }
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  { timestamps: false, }
  );
};
