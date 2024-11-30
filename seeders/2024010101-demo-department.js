'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('departments', [
     {
       title: 'Information Technology',
     },
     {
       title: 'Human Resources',
     },
     {
       title: 'Finance',
     },
     {
       title: 'Marketing',
     },
  ])
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
