import knex from "knex";

// todo: разрулить проблему с путями до sqlite-файла

const environment = process.env.ENVIRONMENT || "development";
const config = require("./knexfile")[environment];

export default knex(config);
