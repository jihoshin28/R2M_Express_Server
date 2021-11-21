'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BookingItem.init({
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
    modelName: 'BookingItem',
  });
  return BookingItem;
};