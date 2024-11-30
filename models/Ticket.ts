import { Model, DataTypes, Sequelize } from 'sequelize';
import { User } from './User';
import { State } from './State';

interface TicketAttributes {
  id: number;
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  created_by: number;
  updated_by: number;
  id_state: number;
  observation: string;
}

export class Ticket extends Model<TicketAttributes> implements TicketAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public created_at!: Date;
  public updated_at!: Date;
  public created_by!: number;
  public updated_by!: number;
  public id_state!: number;
  public observation!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialize(sequelize: Sequelize) {
    Ticket.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        created_by: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        updated_by: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        id_state: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'states',
            key: 'id',
          },
        },
        observation: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'tickets',
        modelName: 'Ticket',
        timestamps: true,
        underscored: true,
      }
    );
  }

  public static associate() {
    Ticket.belongsTo(User, { foreignKey: 'created_by', as: 'creator' });
    Ticket.belongsTo(User, { foreignKey: 'updated_by', as: 'updater' });
    Ticket.belongsTo(State, { foreignKey: 'id_state', as: 'state' });
  }
}