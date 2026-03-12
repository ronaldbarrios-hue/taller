import express from "express";
import { connectMongo } from "./infrastructure/database/mongo.js";
import { countryController } from "./infrastructure/config/container.js";

const app = express();
const PORT = 3000;

app.use(express.json());

await connectMongo();

app.get("/countries", (req, res) => {
  countryController.getAll(req, res);
});

app.post("/countries", (req, res) => {
  countryController.create(req, res);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});