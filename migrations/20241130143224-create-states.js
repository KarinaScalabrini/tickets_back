'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.createTable('states', {
        id: {
          allowNull: false,
          autoIncrement: true,
          type: Sequelize.INTEGER
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING
        }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('states');
  }
};
