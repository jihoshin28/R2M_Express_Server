'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Review.init({
    subject: {
      type: DataTypes.STRING
    },
    text: {
      type: DataTypes.TEXT
    },
    name: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.INTEGER
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};