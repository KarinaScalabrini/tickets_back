import { Model, DataTypes, Sequelize } from 'sequelize';

interface DepartmentAttributes {
  id: number;
  title: string;
}

export class Department extends Model<DepartmentAttributes> implements DepartmentAttributes {
  public id!: number;
  public title!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialize(sequelize: Sequelize) {
    Department.init(
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
      },
      {
        sequelize,
        tableName: 'Departments',
        modelName: 'Department',
        timestamps: true, 
      }
    );
  }
}