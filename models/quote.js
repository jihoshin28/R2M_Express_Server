'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Quote.init({
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    move_size: {
      type: Sequelize.STRING
    },
    weight_total: {
      type: Sequelize.FLOAT
    },
    price_total: {
      type: Sequelize.FLOAT
    },
    comments: {
      type: Sequelize.TEXT
    },
  }, {
    sequelize,
    modelName: 'Quote',
  });
  return Quote;
};