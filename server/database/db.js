// GENERAL
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
  const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@clone-whatsapp.sgnx2nr.mongodb.net/?retryWrites=true&w=majority&appName=clone-whatsapp`;
  try {
    await mongoose.connect(URL);
    console.log("Database connected success");
  } catch (error) {
    console.log("Error while connect database", error.message);
  }
};

export default Connection;
