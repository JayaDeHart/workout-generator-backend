require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL =
  process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

let sequelizeOptions =
  process.env.NODE_ENV === 'production'
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

module.exports = {
  db: sequelize,
  User: User,
  Profile: Profile,
  Squad: Squad,
  Achievement: Achievement,
};
