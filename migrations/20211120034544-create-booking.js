'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
      start_street: {
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
      delivery_street: {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bookings');
  }
};