import mongoose from "mongoose";

const connectDB = async () =>{
    mongoose.connection.on('connected', ()=>console.log("Database Connectd"));
    await mongoose.connect(`${process.env.MONGODB_URL}/mern_auth`);
};

export default connectDB;