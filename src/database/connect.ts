import Knex from "knex";

export function createConnection(config: Knex.MySqlConnectionConfig) {
  return Knex({
    client: "mssql",
    useNullAsDefault: true,
    connection: config
  });
}