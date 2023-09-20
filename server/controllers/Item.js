import Item from "../models/Item.js";
import path from "path";
import asyncWrapper from "../middleware/asyncWrapper.js";
import { fileURLToPath } from "url";


const __filename=fileURLToPath(import.meta.url);
export const getItems=async(req,res)=>{
    try {
        const items=await Item.find();
        res.status(200).json({items});
    } catch (error) {
        console.log(error);
    }
}

export const addItem=asyncWrapper(async(req,res)=>{
    const {name}=req.body;
    const file=req.file.path;
    console.log(req);
    const item=await Item.create({name,file});
    res.status(201).json({item});
});

export const downloadFile=asyncWrapper(async(req,res)=>{
    const {id}=req.params;
    const item=await Item.findById(id);
    if(!item){
        return next(new Error("No Item found"));
    }
    const file=item.file;
    const __dirname=path.dirname(__filename);
    const filePath =path.join(__dirname,`../${file}`);
    res.download(filePath);

})

