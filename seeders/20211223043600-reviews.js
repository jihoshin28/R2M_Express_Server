'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Evelyn T.',
        subject: 'Best Movers we ever had!',
        text: 'Albert, Kevin, and Victor were absolute all stars!! We did a move from San Francisco to Southern California and everything was amazingly done same day- start at 730AM and finished unloading by 730PM. Albert was amazing at communicating with us, even when we had to switch the dates multiple times, so we really appreciate his patience. On the day of the move, Kevin & Victor were the BEST movers we have ever had- professional, efficient, and just all around super nice & gracious guys! I would 100% use this team again and will recommend them to anyone who is moving. Thank you so much, we appreciate you guys!',
        rating: 5, 
        city: 'Los Angeles',
        state: 'CA'
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Summer B.',
        subject: 'Amazing job!',
        text: 'They did amazing job!! My job was slight different and bigger than they expected but they said “we’ll make it work” and they did. They worked efficiently and got everything moved to my new place with no issues. Very kind and polite! Will certainly use them again!!',
        rating: 5, 
        city: 'San Jose',
        state: 'CA'
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Pratima R.',
        subject: 'Super quick and efficient.',
        text: 'They helped us with a local move. The movers arrived on time and were super quick and efficient. I had given them a list with pictures of all the things that needed moving and they provided me with a perfect quote. There was no hassle or surprise fees added at the last moment. I would highly recommend them for your next move.',
        rating: 5, 
        city: 'Fremont',
        state: 'CA'
      }
    ]
  )
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
