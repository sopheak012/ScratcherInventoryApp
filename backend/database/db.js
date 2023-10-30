const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "scratcher_inventory_app",
  "sopheak012",
  "test012",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

module.exports = sequelize;
