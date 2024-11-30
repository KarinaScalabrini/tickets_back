import { Sequelize } from 'sequelize';
import { User } from '../models/User';
import { Department } from '../models/Department';
import { State } from '../models/State';
import { Ticket } from '../models/Ticket';

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', 
});

Department.initialize(sequelize);
User.initialize(sequelize);
State.initialize(sequelize);
Ticket.initialize(sequelize);

User.associate();
Ticket.associate();

sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
});

export { sequelize };