import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js";
import connecToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());//to parse the incoming requests with json payloads (from req.body)

app.use("/api/auth",authRoutes)
// app.get("/", (req,res)=>{
//     res.send("Hello world");
// });



app.listen(PORT , () =>{
    connecToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});  