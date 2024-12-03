'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('states', [
      { id: 1, title: 'Pendente' },
      { id: 2, title: 'Em andamento' },
      { id: 3, title: 'Recusado' },
      { id: 4, title: 'Fechado' },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('states', null, {});
  },
};
