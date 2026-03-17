import { Schema, model } from "mongoose";

const countrySchema = new Schema({
  sku: { type: String, required: true, unique: true },
  precio: { type: Number, required: true },
}, {
  // Esta opción es la clave para resolver tu error:
  id: false,
  versionKey: false
});

export default model("Country", countrySchema);