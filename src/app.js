import express from "express";
import countryRoutes from "./infrastructure/routes/countryRoutes.js";
import cityRoutes from "./infrastructure/routes/cityRoutes.js"; // Importa el nuevo enrutador
import { countryController, cityController } from "./infrastructure/config/container.js"; // Importa ambos controladores

const app = express();
app.use(express.json());

// Prefijos de ruta para mantener el orden
app.use("/api/countries", countryRoutes(countryController));
app.use("/api/cities", cityRoutes(cityController));

export default app;