import Sequelize from 'sequelize';
import sequelize from '../database/index.js';

const Pin = sequelize.define(
  'Pin',
  {
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    placeId: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      field: 'place_id',
    },
    latitude: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    order: {
      type: Sequelize.DataTypes.INTEGER,
    },
    customName: {
      type: Sequelize.DataTypes.UUID,
      field: 'custom_name',
    },
    planId: {
      type: Sequelize.DataTypes.UUID,
      field: 'plan_id',
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

export default Pin;
