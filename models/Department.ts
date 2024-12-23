import { Model, DataTypes, Sequelize } from 'sequelize';

interface DepartmentAttributes {
  id: number;
  title: string;
}

export class Department extends Model<DepartmentAttributes> implements DepartmentAttributes {
  public id!: number;
  public title!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

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
        tableName: 'departments',
        modelName: 'Department',
        timestamps: false, 
      }
    );
  }
}