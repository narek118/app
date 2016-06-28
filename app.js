import app from "./lib/express"
import config from "./config"
import glob from "glob"
import path from "path"

app.listen(8000);

console.log("Server listening at port "+ config.port);

