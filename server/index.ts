import express from "express";

const app = express();
const port = app.get("port") || 3000;

app.listen(port, () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    port,
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});
