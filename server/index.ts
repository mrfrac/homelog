import "colors";
import express from "express";
import routes from "./routes";
import * as bodyParser from "body-parser";
import { join } from "path";
import { ServerResponse } from "http";

const app = express();
app.use(express.static(join(__dirname, "../build")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = app.get("port") || 3000;

app.listen(port, () => {
  console.log(
    "App is running at http://localhost:%d in %s mode".blue,
    port,
    app.get("env")
  );
  console.log("  Press CTRL-C to abort\n".magenta);
});

console.log("\nAPI Routes:".blue);
for (const route of routes) {
  const apiPath = `/api/${route.route.replace(/^\/+/g, "")}`;
  console.log(`  ${route.method}: ${apiPath} => ${route.controller.name}.${route.action.toString()}`.green);
  app[route.method](apiPath, async (req: express.Request, res: express.Response, next: () => void) => {
    const controller = new route.controller();
    const result = await controller[route.action](req, res, next);

    if (result && typeof result.then === "function") {
      result
        .then((actionResult: any) => {
          if (actionResult !== null && actionResult !== undefined) {
            if (actionResult instanceof ServerResponse) {
              return actionResult;
            }
            return res.send(actionResult);
          }
          return undefined;
        }).catch((error: Error) => {
          if (req.xhr) {
            res.status(500).json({ error: error.message });
          } else {
            res.status(500).send(error.message);
          }

          console.log(String(error.stack).red);
        });

    } else if (result !== null && result !== undefined) {
      res.json(result);
    }
  });
}
