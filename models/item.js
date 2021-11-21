'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsToMany(models.Booking, {
        through: 'BookingItem',
        as: 'bookings',
        foreignKey: 'item_id'
      });
      Item.belongsToMany(models.Quote, {
        through: 'QuoteItem',
        as: 'quotes',
        foreignKey: 'item_id'
      });
    }
  };
  Item.init({
    name: {
      type: DataTypes.STRING
    },
    weight: {
      type: DataTypes.FLOAT
    },
    price: {
      type: DataTypes.FLOAT
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};