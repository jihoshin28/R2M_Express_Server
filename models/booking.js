'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsToMany(models.Item, {
        through: 'BookingItem',
        as: 'items',
        foreignKey: 'booking_id'
      });
    }
  };
  Booking.init({
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    move_size: {
      type: DataTypes.STRING
    },
    weight_total: {
      type: DataTypes.FLOAT
    },
    price_total: {
      type: DataTypes.FLOAT
    },
    comment: {
      type: DataTypes.TEXT
    },
    start_time: {
      type: DataTypes.STRING
    },
    start_date: {
      type: DataTypes.DATE
    },
    start_street: {
      type: DataTypes.STRING
    },
    start_city: {
      type: DataTypes.STRING
    },
    start_state: {
      type: DataTypes.STRING
    },
    start_zip: {
      type: DataTypes.STRING
    },
    delivery_time: {
      type: DataTypes.STRING
    },
    delivery_date: {
      type: DataTypes.DATE
    },
    delivery_street: {
      type: DataTypes.STRING
    },
    delivery_city: {
      type: DataTypes.STRING
    },
    delivery_state: {
      type: DataTypes.STRING
    },
    delivery_zip: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};