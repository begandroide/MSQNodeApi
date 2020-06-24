// Update with your config settings.

require('dotenv').config();
module.exports = {
  client: "mssql",
  connection: {
    server: String(process.env.DATABASE_HOST),
    database: String(process.env.DATABASE_NAME),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "migrations"
  },
  timezone: 'UTC'
};
