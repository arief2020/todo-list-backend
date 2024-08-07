
const dotenv = require("dotenv");
dotenv.config();

const config = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: "localhost",
    dialect: "postgres",
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DB_TEST,
    host: "localhost",
    dialect: "postgres",
  },
  docker: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: 5439,
  },
  docker_test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DB_TEST,
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: 5439,
  },
  ci_test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DB_TEST,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
};

module.exports = config;
