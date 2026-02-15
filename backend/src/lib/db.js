import mongoose from "mongoose"; //mongoose-node.js lib-> alliws to interact with mongoDB

//connecting to database
const dbConnect = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database Connected : ${connect.connection.host}, ${connect.connection.name}`); //print: server address, db
    } catch(e){
        console.error("MongoDB connection error:", e.message);
    }
};

export default dbConnect;