import express from "express";

export class IndexController {
  public index(request: express.Request, response: express.Response) {
    return response.json({ "a": 1 });
  }
  public test() {
    
  }
}
