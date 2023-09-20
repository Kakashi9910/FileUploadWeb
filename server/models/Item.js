import mongoose from "mongoose";


const ItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a name"],
        trim:true,
        maxlength:[20,"Name can't be more than 20 character"],
    },
    file:{
        type:String,
        required:[true,"Please provide the file"]
    }
})

const Item=mongoose.model("Item",ItemSchema);
export default Item;