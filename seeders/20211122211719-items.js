'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Items', [
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'A Household Good - 00 lbs',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'A Household Good - 00 lbs',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'A Household Good - 2600 lbs',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'A Household Good - 3900 lbs',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'A Household Good - 5800 lbs',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'Bakers Rack',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'Bed Frame',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'Bench, Large',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'Buffet, Base',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'Cabinet, Corner',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'Cabinet, Medium',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'Chair, Arm',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'Chair, Rocker',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'Coat Rack',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'Computer Screen (PBO)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'Desk Chair, Large',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'Dining Chair',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'Dining Table',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'Dishwasher',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'Exercise Bike',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10.0,
      weight: 10.0,
      name: 'Fan, Floor',
    }
      
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
