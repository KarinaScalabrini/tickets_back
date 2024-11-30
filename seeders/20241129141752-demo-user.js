const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('senha123', 10);

    await queryInterface.bulkInsert('users', [
      {
        name: 'teste',
        email: 'teste.ti@gmail.com',
        password: hashedPassword,
        id_department: 1,
        admin: true,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', {
      email: 'teste.ti@gmail.com',
    });
  },
};
