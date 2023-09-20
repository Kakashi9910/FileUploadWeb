import mongoose from "mongoose";

mongoose.set("strictQuery",false);

const connectDB=(url)=>{
   try{
       return  mongoose.connect(url,{useUnifiedTopology:true},console.log("connectecd to mongodb"))
   }
   catch(err){
       console.log(err);
   }
}

export default connectDB;