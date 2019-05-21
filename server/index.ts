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

app.use(express.logger('dev'));


// todo сделать корневым путем /api
// todo добавить статичный путь до собранного дистриба, за одно скрипт на запуск express
// todo добавить логирование запрошенного пути
for (const route of routes) {
  app[route.method](route.route, async (req: express.Request, res: express.Response, next: () => void) => {
    const controller = new route.controller();

    try {
      const result = await controller[route.action](req, res, next);
      // todo: Дбобавить проверку типов, обработку ошибок
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({
        error: e.toString()
      });
    }
  });
}
