import mongoose from "mongoose";

export async function connectMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URI); // ya no se pasan opciones
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Sale del proceso si no puede conectar
  }
}