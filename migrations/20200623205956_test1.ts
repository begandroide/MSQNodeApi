import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema
      .createTable("user", function(table) {
        table.increments("id").primary();
        table.string("email", 255).notNullable();
        table.string("password", 255).notNullable();
        table.bigInteger("createdAt").notNullable();
        table.bigInteger("updatedAt").notNullable();
      });
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists("user");
}

