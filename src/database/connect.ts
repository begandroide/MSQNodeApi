import Knex from "knex";
import { timeStamp } from "console";

type MySqlConnectionConfigExtended = Knex.MySqlConnectionConfig & {options?: {encrypt: true, enableArithAbort: true}};

export function createConnection(config: MySqlConnectionConfigExtended) {
  return Knex({
    client: "mssql",
    useNullAsDefault: true,
    connection: config
  });
}