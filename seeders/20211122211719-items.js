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
      name: 'A HOUSEHOLD GOOD - 1000 LBS',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A HOUSEHOLD GOOD - 1500 LBS',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A HOUSEHOLD GOOD - 2600 LBS',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A HOUSEHOLD GOOD - 3900 LBS',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A HOUSEHOLD GOOD - 5800 LBS',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A HOUSEHOLD GOOD - 8500 LBS',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A STORAGE UNIT - 5 X 10 - 1750',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A STORAGE UNIT - 10 X 10 - 3500',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A STORAGE UNIT - 10 X 15 - 5000',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A STORAGE UNIT - 10 X 20 - 7000',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A STORAGE UNIT - 10 X 25 - 8500',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A STORAGE UNIT - 10 X 30 - 10000',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'AIR CONDITION, LG',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'AIR CONDITION, SM',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'AQUARIUM STAND, LG',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'AQUARIUM STAND, LG',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'AQUARIUM, 10 GAL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'AQUARIUM, 20 GAL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'AQUARIUM, 55 GAL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'ARMOIRE, LARGE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'ARMOIRE, REGULAR',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'ARMOIRE, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BAKERS RACK',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BAR, 3X4X2',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BAR, STOOL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BARBECUE GRILL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BARBECUE GRILL, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED - BOX SPRING',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED CANOPY',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED FRAME',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, BRIDGE HEADBOARD',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, BRIDGELIGHT',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, BUNK (WITH MATTRESS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, CAPTAIN (WITH MATTRESS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, DAY',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, DOUBLE (WITH MATTRESSES)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, FOOTBOARD',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, FULL (WITH MATTRESS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, KING (WITH MATTRESS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, LARGE HEADBOARD',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, PLATFORM',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, POST',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, QUEEN (WITH MATTRESS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, SINGLE (WITH MATTRESS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, TRUNDLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, TWIN (WITH MATTRESS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, WATER Q/K',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BEAN BAG, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BENCH, LARGE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BENCH, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BIKE, ADULT',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BIKE, CHILD',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOOK SHELF',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOOK SHELF, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOOKCASE 6X3',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOOKCASE, SM.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX LAMP',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, BOOK/SMALL (1.5 CU. FT.)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, CHINA/DISH 18X18X28',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, LINEN/MEDIUM (3.0 CU. FT)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, MED. PBO 18X18X18',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, MED/LG PBO 18X18X24',
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
