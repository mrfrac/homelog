exports.up = function (knex, Promise) {
  return knex.schema
    .createTable("tank", table => {
      table.increments("id");
      table.decimal("volume").notNullable();
      table.string("session").notNullable();
      table.timestamp("created_at", {
        useTz: true
      }).defaultTo(knex.fn.now());
    })
    .createTable("equipment", table => {
      table.increments("id");
      table.string("name").notNullable();
      table.string("description").notNullable();
      table.timestamp("created_at", {
        useTz: true
      }).defaultTo(knex.fn.now());
    })
    .createTable("service", table => {
      table.increments("id");
      table.integer("equipment_id").unsigned();
      table.foreign("equipment_id").references("equipment.id");
      table.string("description").notNullable();
      table.timestamp("created_at", {
        useTz: true
      }).defaultTo(knex.fn.now());
    });
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable("tank")
    .dropTable("service")
    .dropTable("equipment");
};