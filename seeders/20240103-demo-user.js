const bcrypt = require('bcryptjs');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const hashedPassword = await bcrypt.hash('senha123', 10);

      await queryInterface.bulkInsert('users', [
        {
          name: 'Admin',
          email: 'teste.ti@gmail.com',
          password: hashedPassword,
          id_department: 1,
          admin: 1,
        },
        {
          name: 'Colaborador',
          email: 'colab@gmail.com',
          password: hashedPassword,
          id_department: 2,
          admin: 0,
        }
      ]);
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkDelete('Users', null, {});
    } catch (error) {
      console.error('Error deleting seeded data:', error);
    }
  },
};