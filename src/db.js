import { connect } from "mongoose";
import {MONGO_URI} from "./config";

export const connectDB = async () => {
  try {
    await connect(MONGO_URI);
    console.log("-> DB connected successfully");
  } catch (error) {
    console.log(error);
  }
};
