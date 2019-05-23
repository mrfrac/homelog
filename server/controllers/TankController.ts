import express from "express";
import knex from "../knex";

export class TankController {
  public async listAll(request: express.Request, response: express.Response) {
    const tank = await knex("tank").select().orderBy("created_at", "desc");
    return tank;
  }
}
