'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('departments', [
      { id: 1, title: 'Desenvolvimento' },
      { id: 2, title: 'Comercial' },
      { id: 3, title: 'Financeiro' },
      { id: 4, title: 'Recursos Humanos' },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('departments', null, {});
  },
};