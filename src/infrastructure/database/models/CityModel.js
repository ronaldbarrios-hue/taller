import { Schema, model } from "mongoose";

const citySchema = new Schema({
  nombre: { type: String, required: true, unique: true },
  edad: { type: Number, required: true },
}, {
  // Esta opción es la clave para resolver tu error:
  id: false,
  versionKey: false
});

export default model("City", citySchema);