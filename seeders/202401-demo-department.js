'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
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
        }
      ]);
    } catch (error) {
      console.error('Erro ao executar o seed:', error);
    }
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('departments', {
      title: {
        [Sequelize.Op.in]: ['Information Technology', 'Human Resources', 'Finance', 'Marketing']
      }
    });
  }
  
};
