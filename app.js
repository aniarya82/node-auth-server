import express from "express";
import { json, urlencoded } from "body-parser";
import routes from "./routes/routes";
const port = 3001;
const app = express();

app.use(json());
app.use(
  urlencoded({
    extended: true
  })
);
routes(app);
const server = app.listen(port, error => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});
