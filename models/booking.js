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
    }
  };
  Booking.init({
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
    comment: {
      type: Sequelize.TEXT
    },
    start_time: {
      type: Sequelize.STRING
    },
    start_date: {
      type: Sequelize.DATE
    },
    start_address: {
      type: Sequelize.STRING
    },
    start_city: {
      type: Sequelize.STRING
    },
    start_state: {
      type: Sequelize.STRING
    },
    start_zip: {
      type: Sequelize.STRING
    },
    delivery_time: {
      type: Sequelize.STRING
    },
    delivery_date: {
      type: Sequelize.DATE
    },
    delivery_address: {
      type: Sequelize.STRING
    },
    delivery_city: {
      type: Sequelize.STRING
    },
    delivery_state: {
      type: Sequelize.STRING
    },
    delivery_zip: {
      type: Sequelize.STRING
    },
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};