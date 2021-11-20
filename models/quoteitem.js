'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuoteItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  QuoteItem.init({
    quantity: {
      type: Sequelize.INTEGER
    },
    item_id: {
      type: Sequelize.INTEGER
    },
    quote_id: {
      type: Sequelize.INTEGER
    },
  }, {
    sequelize,
    modelName: 'QuoteItem',
  });
  return QuoteItem;
};