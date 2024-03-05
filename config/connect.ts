import mongoose from "mongoose";
import dotenv from "dotenv";

//For env File
dotenv.config();
const url = process.env.URL;
export const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("connected to mongoDB atlas!");
  } catch (err) {
    console.log(err);
  }
};
