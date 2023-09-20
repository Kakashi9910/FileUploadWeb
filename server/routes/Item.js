import upload from "../middleware/Multer.js";
import express from "express";

import { getItems,addItem,downloadFile } from "../controllers/Item.js";


const router=express.Router();

router.route('/').get(getItems).post(upload.single("file"),addItem);
router.route('/download/:id').get(downloadFile);


export default router;