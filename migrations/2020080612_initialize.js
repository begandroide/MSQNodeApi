exports.up = function(knex, Promise) {
    return knex.schema
      .createTable("user", function(table) {
        table.increments("id").primary();
        table.string("email", 255).notNullable();
        table.string("password", 255).notNullable();
        table.bigInteger("createdAt").notNullable();
        table.bigInteger("updatedAt").notNullable();
      });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists("user");
  };