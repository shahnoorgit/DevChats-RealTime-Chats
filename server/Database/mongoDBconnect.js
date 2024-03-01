import mongoose from "mongoose";

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error while connecting db", error.message);
  }
};

export default connectdb;
