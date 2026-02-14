import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express"; //to import express
import dotenv from "dotenv"; 
import cors from "cors";
import dbConnect from "./lib/db.js"; //import db connection
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config(); //read .env file

const app = express(); // create my server app using express

//Middleware
app.use(cors({origin : "http://localhost:5174", credentials: true})); 
app.use(express.json()); //data(POST/PUT body) sent to server in JSON format, understand it
dbConnect();

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//Starting the server
const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
