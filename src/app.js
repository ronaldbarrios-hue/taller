import express from "express";
import countryRoutes from "./infrastructure/routes/countryRoutes.js";
import { countryController } from "./infrastructure/config/container.js";

const app = express();

app.use(express.json());

app.use("/api", countryRoutes(countryController));

export default app;