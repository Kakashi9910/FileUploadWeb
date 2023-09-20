import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import connectDB from "./db/connect.js";
import itemRouter from "./routes/Item.js"

dotenv.config();
const app=express();


const port=process.env.PORT || 8001;

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send(req.body);
})

app.use('/api/v1/items',itemRouter);


const start=async()=>{
    try{
    
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`running on port${port}`);
        })
    }catch(err){
        console.log(err);
    }
}
start();


