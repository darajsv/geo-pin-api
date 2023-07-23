import Sequelize from 'sequelize';
import sequelize from '../database/index.js';

const Plan = sequelize.define(
  'Plan',
  {
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    code: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    sharedCode: {
      type: Sequelize.DataTypes.STRING,
      field: 'shared_code',
    },
    canEdit: {
      type: Sequelize.DataTypes.BOOLEAN,
      field: 'can_edit',
    },
    createdAt: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
    },
    updatedAt: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
      field: 'updated_at',
    },
    deletedAt: {
      type: Sequelize.DataTypes.DATE,
      field: 'deleted_at',
    },
  },
  {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    paranoid: true,
  }
);

export default Plan;
