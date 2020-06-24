import Knex from "knex";

export function createConnection(config: Knex.MsSqlConnectionConfig) {
  return Knex({
    client: "mssql",
    useNullAsDefault: true,
    connection: config
  });
}