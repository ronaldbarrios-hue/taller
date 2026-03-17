import app from "./app.js";
import dotenv from "dotenv";
import { connectMongo } from "./infrastructure/database/mongo.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

await connectMongo();

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});