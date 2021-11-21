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
      type: DataTypes.INTEGER
    },
    item_id: {
      type: DataTypes.INTEGER
    },
    quote_id: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'QuoteItem',
  });
  return QuoteItem;
};