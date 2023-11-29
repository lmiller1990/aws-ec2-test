import * as express from "express";
import * as path from "path";

const PORT = 5555;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
