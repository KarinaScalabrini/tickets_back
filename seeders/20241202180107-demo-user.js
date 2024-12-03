'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const hashedAdminPassword = await bcrypt.hash('adminpassword', 10);
      const hashedUserPassword = await bcrypt.hash('userpassword', 10);

      await queryInterface.bulkInsert('users', [
        {
          id: 1,
          name: 'Admin User',
          email: 'admin@example.com',
          password: hashedAdminPassword,
          id_department: 1, 
          admin: true,
        },
        {
          id: 2,
          name: 'Regular User',
          email: 'user@example.com',
          password: hashedUserPassword,
          id_department: 2,
          admin: false,
        },
      ]);
    } catch (error) {
      console.error('Error seeding users:', error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};