import express from "express";

import routes from "./routes";

const app = express();
const port = app.get("port") || 3000;

app.listen(port, () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    port,
    app.get("env")
  );
  console.log("  Press CTRL-C to abort\n");
});

for (const route of routes) {
  app[route.method](route.route, (req: express.Request, res: express.Response, next: () => void) => {
    const controller = new route.controller();
    const result = controller[route.action](req, res, next);

    return result;
  });
}
