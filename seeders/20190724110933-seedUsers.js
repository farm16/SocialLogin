'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'john@errunds.com',
          address: 'Brooklyn/NY/11237',
          phone: '888-888-3333',
          isTxtActive: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'maria@errunds.com',
          address: 'Queens/NY/11211',
          phone: '888-888-3333',
          isTxtActive: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    /*
    no deletes !!!
    */
  }
};
