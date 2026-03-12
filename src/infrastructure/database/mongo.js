import mongoose from "mongoose";

export async function connectMongo() {

  try {

    await mongoose.connect("mongodb://127.0.0.1:27017/countriesdb");

    console.log("MongoDB connected");

  } catch (error) {

    console.error("MongoDB connection error:", error);

  }

}