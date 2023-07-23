import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const databaseConfig = {
  name: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
};
const sequelize = new Sequelize(
  databaseConfig.name,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    dialect: 'postgres',
  }
);

export default sequelize;
