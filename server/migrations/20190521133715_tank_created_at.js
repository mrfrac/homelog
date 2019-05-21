exports.up = function (knex, Promise) {
  return knex.schema
    .alterTable("tank", table => {
      table.timestamp("created_at", {
        useTz: true
      });
    });
};

exports.down = function (knex, Promise) {
  return knex;
};