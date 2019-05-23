// Update with your config settings.

const {
  resolve
} = require("path");

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: resolve(__dirname, './dev.sqlite3')
    }
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: resolve(__dirname, './dev.sqlite3')
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: resolve(__dirname, './prod.sqlite3')
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};