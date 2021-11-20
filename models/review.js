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
      type: Sequelize.STRING
    },
    text: {
      type: Sequelize.TEXT
    },
    name: {
      type: Sequelize.STRING
    },
    rating: {
      type: Sequelize.INTEGER
    },
    city: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};