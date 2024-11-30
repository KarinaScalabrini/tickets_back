import { Model, DataTypes, Sequelize } from 'sequelize';
import { Department } from './Department';

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  id_department: number;
  admin: boolean;
}

export class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public id_department!: number;
  public admin!: boolean;

  public static initialize(sequelize: Sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        id_department: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Departments',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        admin: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      {
        sequelize,
        tableName: 'Users',
        modelName: 'User',
        timestamps: false,
      }
    );
  }

  public static associate() {
    User.belongsTo(Department, {
      foreignKey: 'id_department',
      as: 'department',
    });
  }
}