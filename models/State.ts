import { Model, DataTypes, Sequelize } from 'sequelize';

interface StateAttributes {
  id: number;
  title: string;
}

export class State extends Model<StateAttributes> implements StateAttributes {
  public id!: number;
  public title!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static initialize(sequelize: Sequelize) {
    State.init(
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
        tableName: 'states',
        modelName: 'State',
        timestamps: false, 
      }
    );
  }
}