import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
    return knex.schema
      .createTable("userApi", function(table) {
        table.increments("id").primary();
        table.string("name", 30).notNullable();
        table.string("id_user", 10).notNullable();
        table.string("password", 255).notNullable();
        table.bigInteger("createdAt").notNullable();
        table.bigInteger("updatedAt").notNullable();
      });
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists("userApi");
}
